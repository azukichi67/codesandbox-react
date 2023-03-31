import React, { useEffect, useState } from "react";
import { ColerfulMessage } from "./compornents/ColerfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [isShow, setIsShow] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchIsShow = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      isShow || setIsShow(true);
    } else {
      isShow && setIsShow(false);
    }
    // eslint-disable-next-line
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ！</h1>
      <ColerfulMessage color="blue">お元気ですか</ColerfulMessage>
      <ColerfulMessage color="pink">元気です</ColerfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchIsShow}>on/0ff</button>
      <p>{num}</p>
      {isShow && <p>ほげ</p>}
    </>
  );
};

export default App;
