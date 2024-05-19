<!--
// v0 by Vercel.
// https://v0.dev/t/Y2AGqmEyDMK
-->

<div class="relative h-screen w-full bg-gradient-to-br from-[#6366F1] to-[#9333EA]  ">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl p-8 bg-white rounded-lg shadow-md ">
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 text-gray-500 hover:text-gray-900  -100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-8 w-8"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <h1 class="text-3xl font-bold text-gray-900 ">Memo App</h1>
          </div>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 text-gray-500 hover:text-gray-900  -100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-8 w-8"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
        <p class="text-lg text-gray-500 ">Write a memo and save it.</p>
        <div class="space-y-4">
          <label for="memo" class="block text-base font-medium text-gray-700 ">
            Memo
          </label>
          <textarea
            id="memo"
            rows="8"
            class="block w-full px-4 py-5 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg   "
            placeholder="Write your memo here..."
          ></textarea>
        </div>
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full text-lg">
          Save Memo
        </button>
      </div>
    </div>
  </div>