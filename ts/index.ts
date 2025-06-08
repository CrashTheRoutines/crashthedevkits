import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.send('Hello from TS!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Components with types

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

// Types API Models

type User = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
};
