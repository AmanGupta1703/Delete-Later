import {} from "react";

type TSocialIcon = {
  id: number;
  icon: string;
};

type TSocialIconProps = {
  id?: number;
  icon: string;
};

const socialIcons: TSocialIcon[] = [
  {
    id: 1,
    icon: "/assests/google-icon.svg",
  },
  {
    id: 2,
    icon: "/assests/facebook-icon.svg",
  },
  {
    id: 3,
    icon: "/assests/twitter-icon.svg",
  },
  {
    id: 4,
    icon: "/assests/linkedin-icon.svg",
  },
];

const Socials = () => {
  return (
    <div className="flex justify-center items-center space-x-3">
      {socialIcons.map((social) => (
        <SocialIcon key={social.id} {...social} />
      ))}
    </div>
  );
};

const SocialIcon = ({ icon }: TSocialIconProps) => {
  return (
    <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-200">
      <img width={28} height={28} src={icon} />
    </div>
  );
};

export default Socials;
