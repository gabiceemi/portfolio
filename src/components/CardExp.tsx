export default function CardExp(props: any) {
  const { title, description } = props
  return (
    <div className="border-3 mx-2 my-2 flex rounded-lg border-2 border-solid border-blue-100 bg-blue-100 px-2 py-2 shadow-md">
      <div className="ml-2 max-w-[270px] flex-shrink-0 flex-grow flex-col">
        <h1 className="text-sm">{title}</h1>
        <p className="ml-2 font-sans text-sm">
          {description.split('\n').map((line: any, index: any) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <h1 className="text-sm">{'}'}</h1>
      </div>
    </div>
  )
}
