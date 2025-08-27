import { Typography } from "@mui/material";

export default function EmptyState({ message }) {
  return (
    <div className="p-4 text-center">
      <Typography variant="h6">{message}</Typography>
    </div>
  );
}
