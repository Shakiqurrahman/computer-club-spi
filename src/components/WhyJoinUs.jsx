import { HiUserGroup } from "react-icons/hi2";
import { SiSkillshare } from "react-icons/si";
import { MdEmojiEvents } from "react-icons/md";


const WhyJoinUs = () => {
    return (
        <div>
            <h2 className="text-center text-secondary text-2xl sm:text-4xl font-semibold mb-10">Why Join SPI Computer Club?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group px-6 py-8 border border-gray-300 rounded-xl flex  flex-col items-center justify-center text-center hover:border-[#00066e]  duration-300">
                    <SiSkillshare className="mb-6 text-[80px] text-secondary"/>
                    <p className="group-hover:text-secondary duration-300 text-[14.5px] leading-relaxed">To build skills in various sectors including Content Writing, Photojournalism, Video Editing, Event Organizing, Volunteering, Development, UI/UX Design, and Graphic Design.</p>
                </div>
                <div className="group px-6 py-8 border border-gray-300 rounded-xl flex  flex-col items-center justify-center text-center hover:border-secondary  duration-300">
                    <HiUserGroup className="mb-6 text-[80px] text-secondary"/>
                    <p className="group-hover:text-secondary duration-300 text-[14.5px] leading-relaxed">To connect with a community of senior, junior and respected teachers. Build harmony and get ideas about the demanding skills of the current and future professional domain.</p>
                </div>
                <div className="group px-6 py-8 border border-gray-300 rounded-xl flex  flex-col items-center justify-center text-center hover:border-[#00066e]  duration-300">
                    <MdEmojiEvents className="mb-6 text-[80px] text-secondary"/>
                    <p className="group-hover:text-secondary duration-300 text-[14.5px] leading-relaxed">To organize events national events such as Computer Science Fest, Computer Gaming Fest and intra ACC events like Jarvis - An Intra ACC Carnival and participate in regularly organized workshops and seminars for ACC members.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyJoinUs;