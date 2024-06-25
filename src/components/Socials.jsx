import { icon_linkedin_w, icon_fb_w, icon_ig_w } from '../assets';
import styles from '../style';

export const Socials = () => {
    return (
        <div className="flex flex-wrap mt-5 gap-3">
            <a href="" target="_blank" rel="noopener noreferrer" className="icon-wrapper bg-blue rounded-full w-10 h-10 flex items-center justify-center">
                <img src={icon_linkedin_w} alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="icon-wrapper bg-blue rounded-full w-10 h-10 flex items-center justify-center">
                <img src={icon_fb_w} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="icon-wrapper bg-blue rounded-full w-10 h-10 flex items-center justify-center">
                <img src={icon_ig_w} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="icon-wrapper bg-blue rounded-full w-10 h-10 flex items-center justify-center">
                <img src={icon_fb_w} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="icon-wrapper bg-blue rounded-full w-10 h-10 flex items-center justify-center">
                <img src={icon_ig_w} alt="Instagram" className="w-5 h-5" />
            </a>
        </div>
    );
};

export default Socials;
