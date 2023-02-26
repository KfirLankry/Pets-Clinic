const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-black text-center text-white md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 fixed bottom-0 w-screen">
        <span className="text-sm mx-auto text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Developed & Designed With{" "}
          <i className="fa-solid fa-heart text-error"></i> By:{" "}
          <a href="https://kfirlankry.com/" className="hover:underline">
            Kfir Lankry.
          </a>
        </span>
      </footer>
    </>
  );
};

export default Footer;
