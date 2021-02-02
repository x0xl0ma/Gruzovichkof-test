import MyWonderfulComponent from "../components/MyWonderfulComponent";

const Page = ({ id, options, count, data, str }) => {
  return (
    <MyWonderfulComponent
      id={id}
      options={options}
      count={count}
      data={data}
      str={str}
    >
      I'm text from a component
    </MyWonderfulComponent>
  );
};

Page.getInitialProps = () => {
  const id = 1,
    count = 0,
    data = "data",
    str = "Hello from SSR",
    options = {
      params: {
        fields: {
          isDynamic: true,
        },
      },
    };
  console.log(str);
  return {
    id,
    options,
    count,
    data,
    str,
  };
};

export default Page;
