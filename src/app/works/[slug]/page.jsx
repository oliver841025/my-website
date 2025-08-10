
const WorkDetail = ({params}) => {
    const {slug} = params;
    console.log(slug)
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">WorkDetail: {slug}</h1>
    </>
  )
}

export default WorkDetail
