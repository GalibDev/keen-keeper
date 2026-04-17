useEffect(() => {
  fetch(`${import.meta.env.BASE_URL}friends.json`)
    .then((res) => res.json())
    .then((data) => {
      const found = data.find((item) => item.id === Number(id));
      setFriend(found || null);
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, [id]);