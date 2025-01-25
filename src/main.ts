import "./style.css";
import "./tailwind.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="min-h-screen my-auto mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:px-12 md:py-16 lg:py-0">
    <div class="mx-auto grid grid-cols-12 gap-x-4">

      <div class="col-span-12 lg:col-span-4 lg:py-24 lg:max-h-screen lg:sticky lg:top-0">
        <header>
          <h1 class="text-4xl font-bold text-slate-200 sm:text-5xl font-primary">Rushil Patel</h1>
          <h2 class="mt-3 text-lg font-secondary tracking-tight text-slate-200 sm:text-xl">Senior Software Engineer</h2>
        </header>
        <p class="mt-4 max-w-xs leading-normal">I build accessible, pixel-perfect digital experiences for the web.</p>
        
        <nav class="nav hidden lg:block" aria-label="In-page jump links">
          <ul class="mt-16 w-max">
            <li>
              <a class="group flex items-center py-3 active" href="#about">
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
              </a>
            </li>
            <li>
              <a class="group flex items-center py-3" href="#experience">
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
              </a></li>
            <li>
              <a class="group flex items-center py-3" href="#interesting-fun-facts">
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
              </a>
            </li>
          </ul>
        </nav>

      </div>
      <div class="col-span-12 lg:col-span-8 lg:py-24">
        <main>
          <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
              <p class="mb-4">I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
              <p class="mb-4">I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
              <p class="mb-4">I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
              <p class="mb-4">I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
            </div>
          </section>
          
          <!-- Experience -->
          
          <section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <!-- T.Rowe Price -->
            <section id="2021-12" aria-labelledby="2021-12-heading" class="md:flex gap-x-8">
              <h2 id="2021-12-heading" class="pl-7 text-sm/6 text-slate-500 md:w-1/4 md:pl-0 md:text-right">
                <a href="#2021-12">December 2021 - Present</a>
              </h2>
              <div class="relative pt-2 pl-7 md:w-3/4 md:pt-0 md:pl-12 pb-16">
                <div class="absolute bottom-0 left-0 w-px bg-slate-200 -top-3 md:top-2.5"></div>
                <div class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-slate-300 bg-white md:top-[0.4375rem]"></div>
                <div class="prose-h3:mb-4 prose-h3:text-base/6 max-w-none prose prose-sm prose-slate prose-a:font-semibold prose-a:text-sky-500 prose-a:no-underline prose-a:hover:text-sky-600 prose-code:text-[13px]/[1.692] prose-pre:rounded-lg prose-pre:px-4 prose-pre:py-[0.875rem]">
                  <h3 class="text-slate-200 font-secondary">AVP, Senior Software Engineer</h3>
                  <p class="mt-2 text-sm leading-normal font-secondary text-slate-400">Developed and implemented reusable, responsive, and accessible design systems and web components using HTML, CSS, TypeScript, and the LIT framework. Automated workflows by creating boilerplate scripts for component generation with single-command solutions and maintained CI/CD pipelines across environments using Jenkins, Docker, GitLab, and JFrog Artifactory. Designed and implemented light, dark, and custom themes with style tokens, ensuring cross-browser compatibility and responsiveness.</p>
                </div>

                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">TypeScript</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">Lit</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">Vite</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">Storybook</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">Knapsack</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">Playwright</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">Applitools</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">Highcharts</div>
                  </li>
                  
                </ul>
              </div>
            </section>
            
            <!-- PNC -->
            <section id="2020-08" aria-labelledby="2020-08-heading" class="md:flex gap-x-8">
              <h2 id="2020-08-heading" class="pl-7 text-sm/6 text-slate-500 md:w-1/4 md:pl-0 md:text-right">
                <a href="#2020-08">August 2020 - December 2021</a>
              </h2>
              <div class="relative pt-2 pl-7 md:w-3/4 md:pt-0 md:pl-12 pb-16">
                <div class="absolute bottom-0 left-0 w-px bg-slate-200 -top-3 md:top-2.5"></div>
                <div class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-slate-300 bg-white md:top-[0.4375rem]"></div>
                <div class="prose-h3:mb-4 prose-h3:text-base/6 max-w-none prose prose-sm prose-slate prose-a:font-semibold prose-a:text-sky-500 prose-a:no-underline prose-a:hover:text-sky-600 prose-code:text-[13px]/[1.692] prose-pre:rounded-lg prose-pre:px-4 prose-pre:py-[0.875rem]">
                  <h3 class="text-slate-200 font-secondary">Lead Software Engineer</h3>
                  <p class="mt-2 text-sm leading-normal font-secondary text-slate-400">
                    Led the front-end team in developing a Single Page Application (SPA) using the Micro Application Pattern with HTML, SCSS, and Angular. Built an Angular workspace and NPM library to ensure code reusability and reduce duplication. Leveraged Angular Material and CDK to create complex and reusable components, such as drag-and-drop features and secure file upload functionality. Developed dynamic reactive forms with Angular Schematics, incorporating advanced validation logic to handle intricate user inputs, and created interactive charts using Highcharts.js, ng2-charts, and custom charting solutions. Collaborated with UX designers and clients to design highly interactive and responsive user interfaces, ensuring compatibility across modern devices and browsers.
                  </p>
                  <p class="mt-2 text-sm leading-normal font-secondary text-slate-400">
                    Maintained and optimized CI/CD pipelines for multiple environments using Jenkins, Nginx, and Apache, while extensively applying RxJS and reactive design patterns, including operators like pipe, mergeMap, switchMap, and combineLatest, for efficient data streams. Implemented a Global Error Handler service for centralized exception management and enhanced touch and gesture control with HammerJS. Designed the application to meet WCAG AAA accessibility standards for inclusivity. Additionally, reviewed the team’s development work, promoting best practices and improving overall code quality.
                  </p>
                </div>

                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">TypeScript</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">Angular</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">Webpack</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">NPM</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">Jasmine</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">RxJS</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">Ng Charts</div>
                  </li>
                  
                </ul>
              </div>
            </section>


          <section id="interesting-fun-facts" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Interesting About me</h2>
            </div>
            <div>
              <p class="mb-4">I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
              <p class="mb-4">I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
              <p class="mb-4">I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
              <p class="mb-4">I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
            </div>
          </section>
        </main>
      </div>
        
      
        <p class="font-mono col-span-12">
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
