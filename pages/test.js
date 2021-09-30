const Test = () => {
  const [items, setItems] = useState(['one', 'two', 'three', 'four', 'five'])
  const [colors, setColors] = useState(['red', 'blue', 'green', 'yellow', 'pink'])

  function shuffle() {
    setItems(_.shuffle(items))
  }

  return (
    <div>
      <button onClick={shuffle}>Shuffle</button>
      <CheckableList items={items} />
      <CheckableList items={colors} renderItem={(itemText) => <span style={{ color: itemText }}>{itemText}</span>} />
    </div>
  )
}

export default Test
