
# AI-Enabled Storytelling Workshop

This is a React-based web application for guiding students through a storytelling framework with AI-generated feedback. The application allows users to input sections of their story and receive structured feedback on various elements such as narrative clarity, tension, and vividness.

## Features
- Step-by-step storytelling framework:
  1. Overarching Point
  2. Situation
  3. Disruption
  4. Results
  5. So What?
- AI-generated feedback for each section to improve clarity and engagement.
- Dynamic and intuitive user interface built with React and Framer Motion.

## How to Run the Project
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/storytelling-workshop.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the OpenAI API key:
   - Create a `.env` file in the root directory.
   - Add the following line:
     ```
     OPENAI_API_KEY=your-api-key
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the application in your browser at `http://localhost:3000`.

## Deployment
This project can be deployed using platforms like [Vercel](https://vercel.com/). Simply upload the project files and configure the environment variables for the OpenAI API key.

## Technologies Used
- **React**: For building the user interface.
- **Framer Motion**: For smooth animations.
- **OpenAI API**: For generating dynamic feedback.
- **Vercel**: For easy deployment.

## Future Enhancements
- Save drafts and revisions.
- Add multi-language support for diverse audiences.
- Integrate video feedback for delivery analysis.

## License
This project is open-source and available under the MIT License.
