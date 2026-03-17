
type ProfileLinkProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  className?: string
}

export const ProfileLink = ({icon: Icon, text, className} : ProfileLinkProps) => {
  return (
    <div>
      <a href="#" className={`flex gap-2 p-2 text-white justify-center items-center border rounded-xl ${className}`}>
        <Icon className='size-5 '/>
        {text}
      </a>
    </div>
  )
}