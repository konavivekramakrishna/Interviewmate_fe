import AudioInput from "./AudioInput";
import OpenAI from "openai";

const CategoryPage = ({ name }: { name: string }) => {
  // const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  // console.log(apiKey);
  // const openai = new OpenAI({
  //   apiKey: apiKey,
  //   dangerouslyAllowBrowser: true,
  // });

  // async function main() {
  //   const completion = await openai.chat.completions.create({
  //     messages: [{ role: "system", content: "What is your name." }],
  //     model: "gpt-3.5-turbo",
  //   });

  //   console.log(completion.choices[0].message.content);
  // }


  return (
    <div className="mt-14">
      <h2>Category Page: {name}</h2>

      {/* <button onClick={() => main()}>run</button> */}
      <AudioInput />
    </div>
  );
};

export default CategoryPage;
