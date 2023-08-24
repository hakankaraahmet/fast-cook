const AboutMe = () => {
  return (
    <div class="container  text-mainDarkText 3xl:w-1/2 mt-16 3xl:mt-20 mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 ">
        <div class="max-h-96 md:h-screen z-10 my-4">
          <img
            className="w-1/2 mx-auto h-full rounded-3xl "
            src="/hakan-karaahmetoglu.jpg"
            alt="hakan karaahmetoglu"
          />
        </div>
        <div class="px-10 ">
          <div class="mb-auto mt-auto max-w-lg ">
            <h1 class="text-3xl uppercase">Hakan Karaahmetoglu</h1>
            <p class="font-semibold mb-5">Frontend Web Developer</p>
            <p>
              Hi. I'm Hakan Karaahmetoğlu. I have been working as Frontend
              developer. - I received training in the field of Frontend
              Development at Clarusway, which based in United States. -I learned
              various technologies about front end development during this
              course. Besides i develop different types of projects to enhance
              my coding ability. These projects are in my Github account. -I
              worked in Pqs Software Company one year -Now currently i have been
              working at Qimia GmbH.
            </p>
            <div className="grid grid-cols-2 gap-x-8 my-8">
              <a
                href="mailto:karaahmethkn@gmail.com"
                class="bg-mainDarkText z-10 bg-opacity-50 hover:bg-opacity-100 rounded-md py-3 px-7 mt-6 text-white text-center justify-center flex items-center"
              >
                Email Me
              </a>
              <a
                href="https://github.com/hakankaraahmet"
                target="_blank"
                class="bg-mainDarkText z-10 bg-opacity-50 hover:bg-opacity-100  rounded-md py-3 px-7 mt-6 text-white text-center"
              >
                My Github Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
