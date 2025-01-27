interface LegalDisclaimerProps {
  className?: string;
}

export default function LegalDisclaimer({ className = '' }: LegalDisclaimerProps) {
  return (
    <div className={`text-center text-md ${className}`}>
      <p className="font-montserrat text-soft-silver opacity-70">
        <span className="font-semibold">Disclaimer:</span> TaTi is an entertainment platform. All predictions and
        insights are for fun and should not be considered financial advice. Always do your own research and consult with
        qualified financial advisors before making any investment decisions.
      </p>
    </div>
  );
}
