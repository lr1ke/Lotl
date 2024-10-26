import React from 'react';

const AboutPage = () => {
  return (
    <div>
                    <div className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8">
                  <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                      <img
                          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                          src="/werkstatt.jpg"
                          alt="Logo"
                          width={360}
                          height={72}
                      />
                  </div>

                  <div className="flex-grow container mx-auto mt-10 px-4 sm:px-4">
                  <h2 className="text-xl mb-7 font-semibold text-center"> About</h2>

      <p>
        Our project draws inspiration from Walter Kempowski's "Das Echolot. Ein kollektives Tagebuch” (1993), 
        a monumental work that serves as a collective diary of events during a pivotal historical moment. 
        Kempowski compiled an extensive amount of personal accounts, letters, diary entries, and other documents 
        from a wide variety of people. It is a powerful example of how individual voices can form a collective narrative, 
        creating a deeper understanding of the human condition.
      </p><br/>
      <p>
        Similarly, this project seeks to echo that spirit by allowing users to document their personal reflections, 
        contributing to a shared tapestry of memories and experiences. Just as "Das Echolot" gathered fragments of private 
        lives to reflect on a larger cultural landscape, our goal is to provide a platform for diverse voices to document 
        and explore their individual journeys.
      </p><br/>
      <p>
        The name "Echolotl" is a creative blend of two distinct concepts: "Echolot," which refers to the collective diary 
        project by Walter Kempowski, and "Axolotl," a fascinating amphibian known for its regenerative abilities and unique nature. 
        By combining these elements, "Echolotl" symbolizes the project’s core idea: gathering and echoing individual voices and 
        stories in a way that is both regenerative and reflective of a broader collective consciousness. The name encapsulates 
        the idea of individual reflections (like the entries in Kempowski’s "Echolot") coming together, while the Axolotl’s 
        characteristics of renewal and adaptability suggest the ever-evolving, living nature of personal and collective narratives.
      </p>
    </div>
  </div>
  </div>
  );
}

export default AboutPage;