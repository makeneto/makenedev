export default function MessageSent() {
    return (
        <div id="hs-task-created-alert" class="size-full relative top-0 start-0 z-80 overflow-x-hidden overflow-y-auto" role="dialog" tabindex="-1" aria-labelledby="hs-task-created-alert-label">
            <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-100 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div class="relative flex flex-col bg-transparent rounded-xl dark:bg-transparent">

                    <div class="text-center overflow-y-auto">
                        <span class="mb-4 inline-flex justify-center items-center size-11 rounded-full border-4 border-green-50 bg-green-100 text-green-500 dark:bg-green-700 dark:border-green-600 dark:text-green-100">
                            <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                            </svg>
                        </span>

                        <h3 id="hs-task-created-alert-label" class="mb-2 text-xl font-bold text-gray-800 dark:text-neutral-200">
                            Message sent successfully!
                        </h3>
                        <p class="text-gray-500 dark:text-neutral-500">
                        If you need a faster response, contact us directly at <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="https://wa.me/945336003?text=Hello,%20I%20am%20contacting%20you%20through%20the%20website%20makenedev.com.">Whatsapp.</a> Thanks 🫰.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
