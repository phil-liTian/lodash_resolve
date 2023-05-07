import after from '../src/after.js'

const done = after(3, () => {
  console.log('saved');
})

done()
done()
done()