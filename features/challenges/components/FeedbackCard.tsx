export function FeedbackCard({ message }: { message: string | null }) {
  if (!message) return null;

  return (
    <div className="border border-muted-foreground/10 rounded-xl p-5 text-lg">
      {message}
    </div>
  );
}
