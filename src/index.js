import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { motion } from "framer-motion";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default function StoryWorkshop() {
  const [step, setStep] = useState(1);
  const [storyParts, setStoryParts] = useState({
    overarchingPoint: "",
    situation: "",
    disruption: "",
    results: "",
    soWhat: "",
  });
  const [feedback, setFeedback] = useState("");

  const handleInputChange = (e) => {
    setStoryParts({ ...storyParts, [e.target.name]: e.target.value });
  };

  const getAIFeedback = async (text, section) => {
    setFeedback("Generating AI feedback...");
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: `Provide feedback on this section of a story: ${text}. Focus on ${section}.` }],
        max_tokens: 150,
      });
      setFeedback(`AI Feedback for ${section}: ${response.choices[0].message.content}`);
    } catch (error) {
      setFeedback("Error generating AI feedback. Please try again.");
    }
  };

  const handleSubmit = async () => {
    await getAIFeedback(storyParts[Object.keys(storyParts)[step - 1]], Object.keys(storyParts)[step - 1]);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <h1 className="text-xl font-bold">AI-Enabled Storytelling Workshop</h1>
      <div className="w-full max-w-lg p-4 space-y-4">
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-lg font-semibold">Step 1: Overarching Point</h2>
            <Textarea name="overarchingPoint" value={storyParts.overarchingPoint} onChange={handleInputChange} placeholder="Enter your overarching point..." />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-lg font-semibold">Step 2: Situation</h2>
            <Textarea name="situation" value={storyParts.situation} onChange={handleInputChange} placeholder="Describe the situation..." />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-lg font-semibold">Step 3: Disruption</h2>
            <Textarea name="disruption" value={storyParts.disruption} onChange={handleInputChange} placeholder="What disrupted the status quo?" />
          </motion.div>
        )}
        {step === 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-lg font-semibold">Step 4: Results</h2>
            <Textarea name="results" value={storyParts.results} onChange={handleInputChange} placeholder="What were the results?" />
          </motion.div>
        )}
        {step === 5 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-lg font-semibold">Step 5: So What?</h2>
            <Textarea name="soWhat" value={storyParts.soWhat} onChange={handleInputChange} placeholder="What is the final takeaway?" />
          </motion.div>
        )}

        <div className="space-x-2">
          {step > 1 && <Button onClick={() => setStep(step - 1)}>Back</Button>}
          {step < 5 ? (
            <Button onClick={() => setStep(step + 1)}>Next</Button>
          ) : (
            <Button onClick={handleSubmit}>Submit for AI Feedback</Button>
          )}
        </div>
        {feedback && <p className="mt-2 text-sm text-blue-500">{feedback}</p>}
      </div>
    </div>
  );
}
