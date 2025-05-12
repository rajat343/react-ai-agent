# ReactAgent – The Autonomous React UI Code Generator

ReactAgent is an open-source tool that uses GPT-4 to generate full React component code from plain English user stories.

## Built With

- GPT-4 (OpenAI API)
- React + TypeScript
- TailwindCSS + Shadcn UI
- Node.js backend with Yarn workspaces

## Features

- Convert user stories (Markdown) to working React UI
- Generates `composition.json`, React components, and a full demo page
- Uses atomic design (atoms to organisms to pages)
- Works with local design system and component libraries

## Project Structure

```
react-agent/
├── backend/
│   └── main/                      # GPT-4 powered generation logic
│       └── .env                  # Add your OpenAI API key here
├── frontend/
│   └── main/                      # React + Vite frontend to preview generated components
│       └── src/react-agent/
│           └── AnalyticsDashboard/
│           └── SaaSLandingPageExample/
```

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourname/react-agent.git
cd react-agent
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Set OpenAI API Key

Create the `.env` file:

```bash
cp backend/main/.env.example backend/main/.env
```

Edit `.env` and insert your API key:

```
OPENAI_SECRET_KEY=sk-...your-key...
```

Ensure any path variables in `.env` are updated correctly.

## How to Generate a UI

### Step 1: Add a User Story

Create a folder for your component group:

```
frontend/main/src/react-agent/YourComponentGroup/
```

Inside it, create a file called `user-story.md` with your user story:

```md
As a user, I want to see a dashboard with revenue, sales, and active users.
```

### Step 2: Run the Backend

```bash
yarn backend:dev
```

This will:
- Parse the user story
- Generate `composition.json`
- Generate component `.tsx` files
- Create `demo.tsx` to preview the UI

### Step 3: Run the Frontend

```bash
yarn frontend:dev
```

Edit `GenReactApp.tsx` to load your generated demo:

```tsx
import YourPageDemo from './react-agent/YourComponentGroup/demo';

function App() {
  return <YourPageDemo />;
}
```

Then visit:

```
http://localhost:3000
```

## Notes

- Requires GPT-4 access via OpenAI API
- Output is best used for prototyping, not production
- You can customize or edit the generated `.tsx` files

