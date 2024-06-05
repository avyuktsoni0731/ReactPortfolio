/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ryErlNM9PKD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Skills() {
  return (
    <section className="w-screen h-auto flex justify-center items-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-[#ccd6f6] tracking-tighter sm:text-4xl md:text-5xl font-Montserrat">
              Coding Superpowers Unlocked{" "}
              <span className="text-webGreen fadeAnimate">!</span>
            </h2>
            <p className="max-w-[700px] font-mono text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out my technical skills and expertise.
            </p>
          </div>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex items-center justify-center space-y-4">
              <div className="flex items-center space-x-2">
                <CodeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400 text-webGreen" />
                <h3 className="font-Montserrat text-lg font-bold">Languages</h3>
              </div>
              <div className="font-mono grid grid-cols-2 gap-4">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="flex items-center justify-center space-y-4">
              <div className="flex items-center space-x-2">
                <PuzzleIcon className="h-6 w-6 text-gray-500 dark:text-gray-400 text-webRed" />
                <h3 className="font-Montserrat text-lg font-bold">
                  Frameworks
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="font-Montserrat flex items-center justify-center space-y-4">
              <div className="flex items-center space-x-2">
                <WrenchIcon className="h-6 w-6 text-gray-500 dark:text-gray-400 text-[#d2b94b]" />
                <h3 className="text-lg font-bold">Tools</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  );
}

function WrenchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
