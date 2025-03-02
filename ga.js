import ua from 'universal-analytics'
const extGa = ua('UA-106810959-19')
chrome.storage.local.get('uid',function(e){
    extGa.set('uid', e.uid)
  })

 export { extGa }