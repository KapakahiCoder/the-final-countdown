export default function TimerChallenge(props) {
  return (
    <section className="challenge">
      <h2>{props.title}</h2>
      <p className="challenge-time">
        {props.targetTime} second{props.targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p className="">Time is running..../ Timer inactive</p>
    </section>
  );
}
