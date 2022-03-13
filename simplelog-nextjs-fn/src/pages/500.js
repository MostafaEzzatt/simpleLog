import Link from "next/link";

const ErrorServerSide = () => {
  return (
    <div className="py-32 text-center text-dark">
      500! Back To Home{" "}
      <Link href="/">
        <a className="text-highlight"> Home </a>
      </Link>
    </div>
  );
};

export default ErrorServerSide;
