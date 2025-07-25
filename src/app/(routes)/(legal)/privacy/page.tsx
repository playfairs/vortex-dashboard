const Privacy = () => {
    return (
        <div className="flex flex-col mx-[10vw] mt-5 sm:mx-[25vw]">
            <span className="font-bold text-5xl text-white">Privacy Policy</span>
            <span className="text-kazu-main italic text-sm mt-5">
                Last updated And Effective Since: Friday, July 25, 2025
            </span>
            <span className="text-neutral-400 text-sm mt-5 pb-5">
                Any information we collect is not used in any malicious manner. If anything shown
                seems misleading, please contact us @{" "}
                <span className="text-white font-semibold">support@playfairs.cc</span>
            </span>
            <div className="flex flex-col gap-4 text-[17px] pl-5">
                <li className="text-neutral-400 marker:text-kazu-main">Guild IDs</li>
                <li className="text-neutral-400 marker:text-kazu-main">Channel IDs</li>
                <li className="text-neutral-400 marker:text-kazu-main">Role IDs</li>
                <li className="text-neutral-400 marker:text-kazu-main">User IDs</li>
                <li className="text-neutral-400 marker:text-kazu-main">Message Timestamps</li>
                <li className="text-neutral-400 marker:text-kazu-main">Message IDs</li>
                <li className="text-neutral-400 marker:text-kazu-main">Past Usernames</li>
                <li className="text-neutral-400 marker:text-kazu-main">
                    Message content when a command is ran (stored for a max of 2 hours or less) or
                    when arguments are passed for commands, or indefinitely if stored in a database
                    for Lore command, users can opt out.
                </li>
                <li className="text-neutral-400 marker:text-kazu-main">
                    Last deleted message content (stored for a max of 2 hours or less)
                </li>
                <li className="text-neutral-400 marker:text-kazu-main">
                    Last message edit history (stored for a max of 2 hours or less)
                </li>
                <li className="text-neutral-400 marker:text-kazu-main">
                    Last Emoji Reaction History (stored for a max of 2 hours or less)
                </li>
            </div>
            <span className="font-bold text-2xl text-white pt-10">
                Why do we need the data and how is it used?
            </span>
            <span className="text-neutral-400 text-sm mt-5">
                When a command is invoked, we store the message content for a maximum of 2 hours or
                less for debugging purposes if the command fails to execute. We also store a
                unlimited number of entries for &apos;Lore&apos; added messages, again users can opt
                out of this and have all their messages purged from the database.
            </span>
            <span className="text-neutral-400 text-sm mt-5">
                Guild IDs, Channel IDs, Role IDs, User IDs and Message IDs are all stored for our
                system to aggregate values to find data, especially for commands which require these
                IDs to function properly or display information. These IDs are also used to identify
                the context of the command and to ensure that the command is executed in the correct
                environment.
            </span>
            <span className="font-bold text-2xl text-white pt-10">
                Who is your collected information shared with?
            </span>
            <span className="text-neutral-400 text-sm mt-5">
                We do not sell or expose your information to others, and, or third parties.
            </span>
            <span className="font-bold text-2xl text-white pt-10">Data Removal?</span>
            <span className="text-neutral-400 text-sm mt-5">
                Email <span className="text-white font-semibold">support@playfairs.cc</span> for all
                of your data that we are currently storing. Response times may vary and could take
                up to 7 days, but is unlilkly to take longer than 12 hours.
            </span>
            <span className="font-bold text-2xl text-white pt-10">
                Changes to the Privacy Policy
            </span>
            <span className="text-neutral-400 text-sm mt-5">
                We can update these terms at any time without notice. Continuing to use our services
                after any changes will mean that you agree with these terms and violation of our
                terms of service could result in a permanent ban across all of our services.
            </span>
        </div>
    )
}

export default Privacy
