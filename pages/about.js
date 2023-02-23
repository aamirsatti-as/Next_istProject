import axios from 'axios';

export async function getServerSideProps() {
  // Make an API call to fetch data
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/5');

  // Extract the data from the response
  const data = res.data;

  // Pass the data as props to the component
  return {
    props: { data },
  };
}

function MyPage({ data }) {
    console.log(data)
  // Use the data to render the page
  return (
    <div>
      <h1>My Page</h1>
      <p>{data.title}</p>
      <p>{data.completed ? 'Completed' : 'Not completed'}</p>
      {/* {data.map((data1)=>{
        return(
            <>
            <p>{data1.title}</p>
            <p>{data1.completed}</p>
            </>
        )
      })} */}
    </div>
  );
}

export default MyPage;
