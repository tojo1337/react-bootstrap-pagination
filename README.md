# Custom react pagination with bootstrap

- This project was to check how pagination wroks
- It doesn't use any prebuild pagination library like **react-paginate**
- The aim was to learn how pagination works and modify the pagination even further in the future

The following code is an example of async function inside useEffect hook
The useEffect hook doesn't allow us to directly pass async function
We can bypass the restriction in the code below

```useEffect(() => {
    async function getFromServer() {
      try {
        let data = await axios.get<ApiData[]>(api);
        setArr(data.data);
      } catch (err) {
        console.error(err);
      }
    }
    getFromServer();
  }, []);
```

The useState hooks down below is originally responsible for setting the number of content the will be visible per page as well as keeping a track on the index number of the current rendered page through the pagination

```
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage] = useState<number>(10);
```

The calculation down below will calculate the first and the last item that will be rendered in a paginated page and also it will create a slice which is the smaller fragment of the original array

```
  let indexOfLastPost = currentPage * postPerPage;
  let indexOfFirstpost = indexOfLastPost - postPerPage;
  let currentPosts = data.slice(indexOfFirstpost, indexOfLastPost);
```

The below code makes the button/index number appear in the paginated content

```
  const [index, setIndex] = useState<number>(1);
  let indexes: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    indexes.push(i);
  }
```

Here, the index state variable will keep trackof the current index through state variable
The array stores the indexes which will be shown in paginated button section
The for loop is to store the number that will be visible in the pagination page change numebr

**It is important as the number is kept dynamic by creating it in this way. So 10 items per page and 100 items will generate 10 virtual pages/ paginated pages but the number will become 20 if we have 200 items.**

#### The consept can be grabbed even better if we look at the code as there are many comments which are making sure that everything can be understood.
