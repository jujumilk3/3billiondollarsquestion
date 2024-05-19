<script lang="ts">
    import { onMount } from 'svelte';
    import {UI_AVATARS_BASE_URL} from '$lib/constants/sites';
    import {generateAvatarUrl} from '$lib/api/apiRequests';


    console.log(UI_AVATARS_BASE_URL);
    const typingDelay: number = 20;    

    let currentIndex: number = 0;
    let typedText: string = '';
    let charIndex: number = 0;
    let answers: string[] = ["If you were given $3 billion after all your life's problems were solved (e.g., housing, car, family, job, etc.), what would you do?",
    "What is the most impactful book you've ever read and why?",
    "Describe a time when you overcame a significant challenge and what you learned from the experience.",
    "I'm gonna hold squid game in real life, what would you do to win?",
    ];
    let text: string = answers[currentIndex];


    const type = () => {
        if (charIndex < text.length) {
            typedText += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        }
    };

    const prevMemo = () => {
        if (currentIndex > 0) {
            currentIndex--;
            resetType();
        }
    };

    const nextMemo = () => {
        if (currentIndex < answers.length - 1) {
            currentIndex++;
            resetType();
        }
    };

    const resetType = () => {
        typedText = '';
        charIndex = 0;
        text = answers[currentIndex];
        type();
    };


    onMount(async () =>{
        type();
        const createdAvatarUrl = await generateAvatarUrl({name: 'John Doe'});
        console.log(createdAvatarUrl);
    });
</script>

<style>
    .typed-text {
        white-space: pre-wrap;
    }
</style>

<div class="relative h-screen w-full bg-gradient-to-br from-[#6366F1] to-[#9333EA]">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl p-8 bg-white rounded-lg shadow-md space-y-6">
        <div class="relative">
            <button on:click={prevMemo} id="prev-btn" class="absolute top-1/2 left-[-6rem] transform -translate-y-1/2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 text-gray-100 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8">
                    <path d="m15 18-6-6 6-6"></path>
                </svg>
            </button>
            <button on:click={nextMemo} id="next-btn" class="absolute top-1/2 right-[-6rem] transform -translate-y-1/2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 text-gray-100 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </button>
            <div class="space-y-6">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <h1 class="text-3xl font-bold text-gray-900">3 Billion Dollar Question</h1>
                    </div>
                </div>
                <p class="text-lg text-gray-500">If you were given $3 billion after all your life's problems were solved (e.g., housing, car, family, job, etc.), what would you do?</p>
                <!-- <img src="{UI_AVATARS_BASE_URL}/john-doe" alt="John Doe" class="w-20 h-20 rounded-full" /> -->
                <div class="space-y-4">
                    <label for="memo" class="block text-base font-bold text-gray-700">Answer</label>
                    <div id="memo" class="block w-full px-4 py-5 text-gray-600 bg-white border-t border-b border-gray-300 rounded-none shadow-sm focus:outline-none sm:text-xl text-xl typed-text">
                        {typedText}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
