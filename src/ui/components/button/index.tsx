import React, { FC, useCallback } from "react";

type Props = {
  outline?: boolean;
  title: string;
  onClick: () => void;
}

const Button: FC<Props> = (props) => {
  const { outline = true, title, onClick } = props;

  const resolveIcon = useCallback(() => {
    if (outline) {
      return <img src={require('/assets/images/plus/plus.png')} alt="plus" />
    } else {
      return <img src={require('/assets/images/plus/plus-white.png')} alt="plus-white" />
    }
  }, [outline]);

  return (
    <div onClick={onClick} className={`button ${outline && 'button_outline'}`}>
      {resolveIcon()}
      {title}
    </div>
  );
};

export default Button;
