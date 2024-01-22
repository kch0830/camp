import React, { useEffect, useState } from "react";

const useInput = (data) => {
  const [value, setValue] = useState(data);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const validate = (input) => {
  const { userid, password } = input;
  const errors = {};

  if (userid === "") {
    errors.userid = "이메일을 입력해주세요";
  } else if (!/^[a-z0-9%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(userid)) {
    errors.userid = "이메일이 유효하지 않습니다";
  }

  if (!password) {
    errors.password = "비밀번호를 입력해주세요";
  } else if (password.length < 8) {
    errors.password = "8자 이상의 비밀번호를 입력해주세요";
  }
  return errors;
};

const LoginForm = () => {
  const id = useInput("");
  const pw = useInput("");
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    // console.log(e);
    e.preventDefault();
    setSubmit(true);

    const input = {
      userid: id.value,
      password: pw.value,
    };

    setErrors(validate(input));
  };

  useEffect(() => {
    const check_id = document.getElementById("checkid");
    const ID = check_id.value;
    const check_pw = document.getElementById("checkpw");
    const PASSWORD = check_pw.value;
    const jsonValue = JSON.parse(localStorage.getItem("obj"));
    console.log(jsonValue);
    // JSON.parse(localStorage.getItem("obj"));
    if (submit) {
      console.log(window.localStorage);
      if (
        ID === localStorage.getItem("id").value &&
        PASSWORD === localStorage.getItem("pw").value
      ) {
        alert("로그인 성공");
        console.log("로그인 성공");
      } else {
        console.log("로그인 실패");
      }
    }
  }, [submit]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <ul>
        <li>
          <label htmlFor="userid">아이디</label>
          <input type="text" name="userid" id="checkid" {...id} />
          {errors.userid && <span>{errors.userid}</span>}
        </li>
        <li>
          <label htmlFor="password">패스워드</label>
          <input type="password" name="password" id="checkpw" {...pw} />
          {errors.password && <span>{errors.password}</span>}
        </li>
        <li>
          <input type="submit" value="로그인" />
        </li>
      </ul>
    </form>
  );
};

export default LoginForm;
