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

const Form = () => {
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
    if (submit) {
      console.log("회원가입 완료");
      if (Object.keys(errors).length === 0) {
        alert("회원가입이 완료되었습니다.");
      }
      setSubmit(false);
    }
  }, [errors]);

  const [addStorage, setAddStorage] = useState([]);

  const storage = () => {
    console.log(addStorage);
    // 여기 콘솔에 찍힌 arr를 로컬에 저장하자!!
    setAddStorage([{ id, pw }, ...addStorage]);
    localStorage.setItem("obj", JSON.stringify({ id: id, pw: pw }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <ul>
        <li>
          <label htmlFor="userid">아이디</label>
          <input type="text" name="userid" {...id} />
          {errors.userid && <span>{errors.userid}</span>}
        </li>
        <li>
          <label htmlFor="password">패스워드</label>
          <input type="password" name="password" {...pw} />
          {errors.password && <span>{errors.password}</span>}
        </li>
        <li>
          <input type="submit" value="가입" onClick={storage} />
        </li>
      </ul>
    </form>
  );
};
export default Form;
