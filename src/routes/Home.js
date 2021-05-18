import { useState } from "react";
import { dbService } from "fbase";

const Home = () => {
  const [tweet, setTweet] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("tweets").add({
      tweet, // same thing as tweet: tweet
      createdAt: Date.now(),
    });
    setTweet(""); // to clear the input field
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={tweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Tweet" />
      </form>
    </div>
  );
};
export default Home;
