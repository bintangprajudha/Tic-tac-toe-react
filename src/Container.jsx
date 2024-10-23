import React from "react";

export default function Container() {
  const linkCross = "../public/img/x.png";
  const linkCircle = "../public/img/o.png";
  const [isCrossWin, setIsCrossWin] = React.useState(false);
  const [isCircleWin, setIsCircleWin] = React.useState(false);
  const [countCross, setCountCross] = React.useState(0);
  const [countCircle, setCountCircle] = React.useState(0);
  const [cross, setCross] = React.useState(false);
  const styleCross = isCrossWin ?  {color: "rgb(15, 239, 104)"} : {color:"black"}
  const styleCircle = isCircleWin ?  {color: "rgb(15, 239, 104)"} : {color:"black"}

  const [item, setItem] = React.useState([
    { id: 1, box: "", isFill: false },
    { id: 2, box: "", isFill: false },
    { id: 3, box: "", isFill: false },
    { id: 4, box: "", isFill: false },
    { id: 5, box: "", isFill: false },
    { id: 6, box: "", isFill: false },
    { id: 7, box: "", isFill: false },
    { id: 8, box: "", isFill: false },
    { id: 9, box: "", isFill: false },
  ]);

  React.useEffect(() => {
    if (
      (item[0].box == item[1].box &&
        item[1].box == item[2].box &&
        item[2].box == "x") ||
      (item[3].box == item[4].box &&
        item[4].box == item[5].box &&
        item[5].box == "x") ||
      (item[6].box == item[7].box &&
        item[7].box == item[8].box &&
        item[8].box == "x") ||
      (item[0].box == item[3].box &&
        item[3].box == item[6].box &&
        item[6].box == "x") ||
      (item[1].box == item[4].box &&
        item[4].box == item[7].box &&
        item[7].box == "x") ||
      (item[2].box == item[5].box &&
        item[5].box == item[8].box &&
        item[8].box == "x") ||
      (item[0].box == item[4].box &&
        item[4].box == item[8].box &&
        item[8].box == "x") ||
      (item[2].box == item[4].box &&
        item[4].box == item[6].box &&
        item[6].box == "x")
    ) {
      setIsCrossWin(true);
      setCountCross((c) => c + 1);
    } else if (
      (item[0].box == item[1].box &&
        item[1].box == item[2].box &&
        item[2].box == "o") ||
      (item[3].box == item[4].box &&
        item[4].box == item[5].box &&
        item[5].box == "o") ||
      (item[6].box == item[7].box &&
        item[7].box == item[8].box &&
        item[8].box == "o") ||
      (item[0].box == item[3].box &&
        item[3].box == item[6].box &&
        item[6].box == "o") ||
      (item[1].box == item[4].box &&
        item[4].box == item[7].box &&
        item[7].box == "o") ||
      (item[2].box == item[5].box &&
        item[5].box == item[8].box &&
        item[8].box == "o") ||
      (item[0].box == item[4].box &&
        item[4].box == item[8].box &&
        item[8].box == "o") ||
      (item[2].box == item[4].box &&
        item[4].box == item[6].box &&
        item[6].box == "o")
    ) {
      setIsCircleWin(true);
      setCountCircle((c) => c + 1);
    }
  },[cross]);

  let listItem = item.map((i) => {
    return (
      <li
        key={i.id}
        className="box"
        onClick={(e) => {
          e.stopPropagation;
          toggleBox(event.target.id);
        }}
        id={i.id}
      >
        {i.box == "" ? (
          ""
        ) : (
          <img
            src={i.box == "x" ? linkCross : linkCircle}
            onClick={() => toggleBox(event.target.id)}
            id={i.id}
          />
        )}
      </li>
    );
  });

  function toggleBox(e) {
    if (!cross && !isCrossWin && !isCircleWin) {
      setItem(
        item.map((i) => {
          if (i.id == e && !i.isFill) {
            setCross(!cross);
            return {
              ...i,
              box: "x",
              isFill: true,
            };
          } else {
            return i;
          }
        })
      );
    } else if (cross && !isCrossWin && !isCircleWin) {
      setItem(
        item.map((i) => {
          if (i.id == e && !i.isFill) {
            setCross(!cross);
            return {
              ...i,
              box: "o",
              isFill: true,
            };
          } else {
            return i;
          }
        })
      );
    }
  }

  function playAgain(){
    setItem(
      item.map((i) => {
          return {
            ...i,
            box: "",
            isFill: false,
          };
        } 
    ))
    setIsCrossWin(false)
    setIsCircleWin(false);
    setCross(false)
    console.log(item)
  }

  return (
    <div className="container">
      <img src="../public/img/tictactoe.png" alt="" className="logo" />
      <ul className="box-container">{listItem}</ul>
      <div className="score-container">
        <p style={styleCross}>X = {countCross}</p>
        <p style={styleCircle}>O = {countCircle}</p>
        <button className="play" onClick={playAgain}>Play again</button>
      </div>
    </div>
  );
}
