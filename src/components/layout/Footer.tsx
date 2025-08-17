export default function Footer() {
  return (
    <footer className="bg-mediumBlue py-3 text-white">
      <div className="m-auto w-fit text-center">
        <p>
          Made by{" "}
          <a
            href="https://github.com/BreakingDev24"
            target="_blank"
            className="text-red underline"
          >
            BreakingDev24
          </a>{" "}
          &copy; {new Date().getFullYear()}
        </p>
        <p>
          This project is based on a design from a{" "}
          <a
            href="https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X"
            target="_blank"
            className="text-red underline"
          >
            Frontend Mentor challenge
          </a>
        </p>
        <p>
          API provided by{" "}
          <a
            href="https://www.themoviedb.org/?language=en-US"
            target="_blank"
            className="text-red underline"
          >
            TMDB
          </a>
        </p>
      </div>
    </footer>
  );
}
