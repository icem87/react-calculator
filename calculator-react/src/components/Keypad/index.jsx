import React from "react";

const Keypad = ({ click }) => {
  return (
    <div className="">
      <button className="btn btn--grey" name="C" onClick={(e) => click(e.target.name)}>
        C
      </button>
      <button className="btn btn--grey" name="%" onClick={(e) => click(e.target.name)}>
        %
      </button>
      <button className="btn btn--grey" name="CE" onClick={(e) => click(e.target.name)}>
        Del
      </button>
      <button className="btn btn--orange" name="/" onClick={(e) => click(e.target.name)}>
        ÷
      </button>
      <br />
      <button className="btn" name="7" onClick={(e) => click(e.target.name)}>
        7
      </button>
      <button className="btn" name="8" onClick={(e) => click(e.target.name)}>
        8
      </button>
      <button className="btn" name="9" onClick={(e) => click(e.target.name)}>
        9
      </button>

      <button className="btn btn--orange" name="+" onClick={(e) => click(e.target.name)}>
        +
      </button>
      <br />

      <button className="btn" name="4" onClick={(e) => click(e.target.name)}>
        4
      </button>
      <button className="btn" name="5" onClick={(e) => click(e.target.name)}>
        5
      </button>
      <button className="btn" name="6" onClick={(e) => click(e.target.name)}>
        6
      </button>
      <button className="btn btn--orange" name="-" onClick={(e) => click(e.target.name)}>
        -
      </button>
      <br />

      <button className="btn" name="1" onClick={(e) => click(e.target.name)}>
        1
      </button>
      <button className="btn" name="2" onClick={(e) => click(e.target.name)}>
        2
      </button>
      <button className="btn" name="3" onClick={(e) => click(e.target.name)}>
        3
      </button>
      <button className="btn btn--orange" name="*" onClick={(e) => click(e.target.name)}>
        x
      </button>
      <br />

      <button name="0" className=" btn--zero" onClick={(e) => click(e.target.name)}>
        0
      </button>
      <button className="btn" name="." onClick={(e) => click(e.target.name)}>
        .
      </button>
      <button className="btn btn--orange" name="=" onClick={(e) => click(e.target.name)}>
        =
      </button>

      <br />
    </div>
  );
};

export default Keypad;
