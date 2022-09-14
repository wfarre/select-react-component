import { Select } from "./lib";
import { useEffect, useState } from "react";
import { states } from "./statesData";


function App() {
  const [value, setValue] = useState("hello");


  const handleSelect = (newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    console.log(value);
  }, [value])

  const stateData = states.map(state => {
    return state.name
  })

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed elit quis nunc rutrum volutpat blandit sed nisl. Duis vehicula ligula nec fringilla tristique. Fusce egestas magna quam. Fusce laoreet finibus rhoncus. Sed eget eleifend felis. Suspendisse et purus diam. Nullam et blandit erat. Nulla augue ipsum, molestie in ipsum sit amet, sagittis sollicitudin justo. Aenean tempor elit nunc, at venenatis velit luctus suscipit. Praesent purus est, pharetra a iaculis aliquet, luctus eu elit. Ut eget lorem dignissim, interdum ex vitae, blandit mauris. Sed auctor justo ut euismod tincidunt.

Vivamus quis purus a quam mollis placerat vel nec dui. Phasellus feugiat enim eu quam rutrum aliquet. Donec semper lacinia tellus, eget eleifend quam bibendum et. Nunc lobortis ac metus vel vulputate. Donec felis urna, pellentesque ac bibendum quis, pulvinar in felis. Nulla vitae elit tellus. Cras blandit lobortis diam, vel vulputate metus rutrum nec. Donec vel lacus sem. Sed malesuada fringilla commodo. Maecenas ornare leo sed nisl vulputate, a maximus ex tristique. Vestibulum a lacinia lacus, at suscipit justo. Pellentesque non enim vel augue vulputate laoreet. Aliquam ac laoreet ligula, sed volutpat elit. Cras tempus tempus pulvinar.

Aliquam sagittis mi eget tristique rhoncus. Morbi eu euismod dui, at elementum eros. Nulla feugiat sollicitudin libero a rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed scelerisque tristique ex, auctor fringilla dui suscipit eget. Vivamus id augue varius, vulputate turpis non, faucibus ipsum. Curabitur nec est eget justo pharetra condimentum. Sed sed luctus nulla. In aliquam risus quis ligula facilisis, quis luctus ipsum dignissim. Quisque justo massa, consequat ac risus fringilla, dictum aliquam orci. Praesent aliquam porttitor fringilla. Nulla commodo venenatis sollicitudin.

Vestibulum pellentesque sed neque quis ornare. Donec egestas eleifend dapibus. Vivamus maximus sed tellus vel faucibus. Morbi vel consectetur diam. Cras bibendum ex nec libero tempus pellentesque. Mauris facilisis posuere metus, vel pharetra ligula pretium quis. Phasellus quis felis tortor. Integer tempor id leo ut dapibus. Nunc non justo rutrum, malesuada risus eget, tristique arcu. Sed vitae dolor sed eros commodo suscipit a et erat. Morbi felis nunc, volutpat nec nunc nec, pharetra egestas justo. Nullam nec nisl eu orci egestas sagittis. Suspendisse augue velit, viverra vel lobortis non, lobortis in nisl. Vivamus commodo scelerisque leo ut semper. Proin ornare tortor eget eros varius euismod. Etiam tristique neque in metus porttitor, et finibus ligula condimentum.

Nam sit amet diam vel magna rutrum euismod nec et diam. Duis metus urna, ultricies nec semper ac, convallis in nisl. Nulla fermentum maximus massa sed eleifend. Pellentesque in iaculis urna. Morbi porttitor diam lectus, ut viverra eros fermentum in. Curabitur vehicula massa sit amet diam tincidunt tincidunt. Curabitur tincidunt pretium consectetur. Maecenas congue vitae tellus eget suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam auctor sollicitudin nisi a hendrerit. Phasellus sit amet massa a nisl fringilla dapibus. Maecenas sed sem et justo dapibus efficitur nec non diam.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed elit quis nunc rutrum volutpat blandit sed nisl. Duis vehicula ligula nec fringilla tristique. Fusce egestas magna quam. Fusce laoreet finibus rhoncus. Sed eget eleifend felis. Suspendisse et purus diam. Nullam et blandit erat. Nulla augue ipsum, molestie in ipsum sit amet, sagittis sollicitudin justo. Aenean tempor elit nunc, at venenatis velit luctus suscipit. Praesent purus est, pharetra a iaculis aliquet, luctus eu elit. Ut eget lorem dignissim, interdum ex vitae, blandit mauris. Sed auctor justo ut euismod tincidunt.

Vivamus quis purus a quam mollis placerat vel nec dui. Phasellus feugiat enim eu quam rutrum aliquet. Donec semper lacinia tellus, eget eleifend quam bibendum et. Nunc lobortis ac metus vel vulputate. Donec felis urna, pellentesque ac bibendum quis, pulvinar in felis. Nulla vitae elit tellus. Cras blandit lobortis diam, vel vulputate metus rutrum nec. Donec vel lacus sem. Sed malesuada fringilla commodo. Maecenas ornare leo sed nisl vulputate, a maximus ex tristique. Vestibulum a lacinia lacus, at suscipit justo. Pellentesque non enim vel augue vulputate laoreet. Aliquam ac laoreet ligula, sed volutpat elit. Cras tempus tempus pulvinar.

Aliquam sagittis mi eget tristique rhoncus. Morbi eu euismod dui, at elementum eros. Nulla feugiat sollicitudin libero a rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed scelerisque tristique ex, auctor fringilla dui suscipit eget. Vivamus id augue varius, vulputate turpis non, faucibus ipsum. Curabitur nec est eget justo pharetra condimentum. Sed sed luctus nulla. In aliquam risus quis ligula facilisis, quis luctus ipsum dignissim. Quisque justo massa, consequat ac risus fringilla, dictum aliquam orci. Praesent aliquam porttitor fringilla. Nulla commodo venenatis sollicitudin.

Vestibulum pellentesque sed neque quis ornare. Donec egestas eleifend dapibus. Vivamus maximus sed tellus vel faucibus. Morbi vel consectetur diam. Cras bibendum ex nec libero tempus pellentesque. Mauris facilisis posuere metus, vel pharetra ligula pretium quis. Phasellus quis felis tortor. Integer tempor id leo ut dapibus. Nunc non justo rutrum, malesuada risus eget, tristique arcu. Sed vitae dolor sed eros commodo suscipit a et erat. Morbi felis nunc, volutpat nec nunc nec, pharetra egestas justo. Nullam nec nisl eu orci egestas sagittis. Suspendisse augue velit, viverra vel lobortis non, lobortis in nisl. Vivamus commodo scelerisque leo ut semper. Proin ornare tortor eget eros varius euismod. Etiam tristique neque in metus porttitor, et finibus ligula condimentum.

Nam sit amet diam vel magna rutrum euismod nec et diam. Duis metus urna, ultricies nec semper ac, convallis in nisl. Nulla fermentum maximus massa sed eleifend. Pellentesque in iaculis urna. Morbi porttitor diam lectus, ut viverra eros fermentum in. Curabitur vehicula massa sit amet diam tincidunt tincidunt. Curabitur tincidunt pretium consectetur. Maecenas congue vitae tellus eget suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam auctor sollicitudin nisi a hendrerit. Phasellus sit amet massa a nisl fringilla dapibus. Maecenas sed sem et justo dapibus efficitur nec non diam.


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed elit quis nunc rutrum volutpat blandit sed nisl. Duis vehicula ligula nec fringilla tristique. Fusce egestas magna quam. Fusce laoreet finibus rhoncus. Sed eget eleifend felis. Suspendisse et purus diam. Nullam et blandit erat. Nulla augue ipsum, molestie in ipsum sit amet, sagittis sollicitudin justo. Aenean tempor elit nunc, at venenatis velit luctus suscipit. Praesent purus est, pharetra a iaculis aliquet, luctus eu elit. Ut eget lorem dignissim, interdum ex vitae, blandit mauris. Sed auctor justo ut euismod tincidunt.

Vivamus quis purus a quam mollis placerat vel nec dui. Phasellus feugiat enim eu quam rutrum aliquet. Donec semper lacinia tellus, eget eleifend quam bibendum et. Nunc lobortis ac metus vel vulputate. Donec felis urna, pellentesque ac bibendum quis, pulvinar in felis. Nulla vitae elit tellus. Cras blandit lobortis diam, vel vulputate metus rutrum nec. Donec vel lacus sem. Sed malesuada fringilla commodo. Maecenas ornare leo sed nisl vulputate, a maximus ex tristique. Vestibulum a lacinia lacus, at suscipit justo. Pellentesque non enim vel augue vulputate laoreet. Aliquam ac laoreet ligula, sed volutpat elit. Cras tempus tempus pulvinar.

Aliquam sagittis mi eget tristique rhoncus. Morbi eu euismod dui, at elementum eros. Nulla feugiat sollicitudin libero a rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed scelerisque tristique ex, auctor fringilla dui suscipit eget. Vivamus id augue varius, vulputate turpis non, faucibus ipsum. Curabitur nec est eget justo pharetra condimentum. Sed sed luctus nulla. In aliquam risus quis ligula facilisis, quis luctus ipsum dignissim. Quisque justo massa, consequat ac risus fringilla, dictum aliquam orci. Praesent aliquam porttitor fringilla. Nulla commodo venenatis sollicitudin.

Vestibulum pellentesque sed neque quis ornare. Donec egestas eleifend dapibus. Vivamus maximus sed tellus vel faucibus. Morbi vel consectetur diam. Cras bibendum ex nec libero tempus pellentesque. Mauris facilisis posuere metus, vel pharetra ligula pretium quis. Phasellus quis felis tortor. Integer tempor id leo ut dapibus. Nunc non justo rutrum, malesuada risus eget, tristique arcu. Sed vitae dolor sed eros commodo suscipit a et erat. Morbi felis nunc, volutpat nec nunc nec, pharetra egestas justo. Nullam nec nisl eu orci egestas sagittis. Suspendisse augue velit, viverra vel lobortis non, lobortis in nisl. Vivamus commodo scelerisque leo ut semper. Proin ornare tortor eget eros varius euismod. Etiam tristique neque in metus porttitor, et finibus ligula condimentum.

Nam sit amet diam vel magna rutrum euismod nec et diam. Duis metus urna, ultricies nec semper ac, convallis in nisl. Nulla fermentum maximus massa sed eleifend. Pellentesque in iaculis urna. Morbi porttitor diam lectus, ut viverra eros fermentum in. Curabitur vehicula massa sit amet diam tincidunt tincidunt. Curabitur tincidunt pretium consectetur. Maecenas congue vitae tellus eget suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam auctor sollicitudin nisi a hendrerit. Phasellus sit amet massa a nisl fringilla dapibus. Maecenas sed sem et justo dapibus efficitur nec non diam.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed elit quis nunc rutrum volutpat blandit sed nisl. Duis vehicula ligula nec fringilla tristique. Fusce egestas magna quam. Fusce laoreet finibus rhoncus. Sed eget eleifend felis. Suspendisse et purus diam. Nullam et blandit erat. Nulla augue ipsum, molestie in ipsum sit amet, sagittis sollicitudin justo. Aenean tempor elit nunc, at venenatis velit luctus suscipit. Praesent purus est, pharetra a iaculis aliquet, luctus eu elit. Ut eget lorem dignissim, interdum ex vitae, blandit mauris. Sed auctor justo ut euismod tincidunt.

Vivamus quis purus a quam mollis placerat vel nec dui. Phasellus feugiat enim eu quam rutrum aliquet. Donec semper lacinia tellus, eget eleifend quam bibendum et. Nunc lobortis ac metus vel vulputate. Donec felis urna, pellentesque ac bibendum quis, pulvinar in felis. Nulla vitae elit tellus. Cras blandit lobortis diam, vel vulputate metus rutrum nec. Donec vel lacus sem. Sed malesuada fringilla commodo. Maecenas ornare leo sed nisl vulputate, a maximus ex tristique. Vestibulum a lacinia lacus, at suscipit justo. Pellentesque non enim vel augue vulputate laoreet. Aliquam ac laoreet ligula, sed volutpat elit. Cras tempus tempus pulvinar.

Aliquam sagittis mi eget tristique rhoncus. Morbi eu euismod dui, at elementum eros. Nulla feugiat sollicitudin libero a rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed scelerisque tristique ex, auctor fringilla dui suscipit eget. Vivamus id augue varius, vulputate turpis non, faucibus ipsum. Curabitur nec est eget justo pharetra condimentum. Sed sed luctus nulla. In aliquam risus quis ligula facilisis, quis luctus ipsum dignissim. Quisque justo massa, consequat ac risus fringilla, dictum aliquam orci. Praesent aliquam porttitor fringilla. Nulla commodo venenatis sollicitudin.

Vestibulum pellentesque sed neque quis ornare. Donec egestas eleifend dapibus. Vivamus maximus sed tellus vel faucibus. Morbi vel consectetur diam. Cras bibendum ex nec libero tempus pellentesque. Mauris facilisis posuere metus, vel pharetra ligula pretium quis. Phasellus quis felis tortor. Integer tempor id leo ut dapibus. Nunc non justo rutrum, malesuada risus eget, tristique arcu. Sed vitae dolor sed eros commodo suscipit a et erat. Morbi felis nunc, volutpat nec nunc nec, pharetra egestas justo. Nullam nec nisl eu orci egestas sagittis. Suspendisse augue velit, viverra vel lobortis non, lobortis in nisl. Vivamus commodo scelerisque leo ut semper. Proin ornare tortor eget eros varius euismod. Etiam tristique neque in metus porttitor, et finibus ligula condimentum.

Nam sit amet diam vel magna rutrum euismod nec et diam. Duis metus urna, ultricies nec semper ac, convallis in nisl. Nulla fermentum maximus massa sed eleifend. Pellentesque in iaculis urna. Morbi porttitor diam lectus, ut viverra eros fermentum in. Curabitur vehicula massa sit amet diam tincidunt tincidunt. Curabitur tincidunt pretium consectetur. Maecenas congue vitae tellus eget suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam auctor sollicitudin nisi a hendrerit. Phasellus sit amet massa a nisl fringilla dapibus. Maecenas sed sem et justo dapibus efficitur nec non diam.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed elit quis nunc rutrum volutpat blandit sed nisl. Duis vehicula ligula nec fringilla tristique. Fusce egestas magna quam. Fusce laoreet finibus rhoncus. Sed eget eleifend felis. Suspendisse et purus diam. Nullam et blandit erat. Nulla augue ipsum, molestie in ipsum sit amet, sagittis sollicitudin justo. Aenean tempor elit nunc, at venenatis velit luctus suscipit. Praesent purus est, pharetra a iaculis aliquet, luctus eu elit. Ut eget lorem dignissim, interdum ex vitae, blandit mauris. Sed auctor justo ut euismod tincidunt.

Vivamus quis purus a quam mollis placerat vel nec dui. Phasellus feugiat enim eu quam rutrum aliquet. Donec semper lacinia tellus, eget eleifend quam bibendum et. Nunc lobortis ac metus vel vulputate. Donec felis urna, pellentesque ac bibendum quis, pulvinar in felis. Nulla vitae elit tellus. Cras blandit lobortis diam, vel vulputate metus rutrum nec. Donec vel lacus sem. Sed malesuada fringilla commodo. Maecenas ornare leo sed nisl vulputate, a maximus ex tristique. Vestibulum a lacinia lacus, at suscipit justo. Pellentesque non enim vel augue vulputate laoreet. Aliquam ac laoreet ligula, sed volutpat elit. Cras tempus tempus pulvinar.

Aliquam sagittis mi eget tristique rhoncus. Morbi eu euismod dui, at elementum eros. Nulla feugiat sollicitudin libero a rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed scelerisque tristique ex, auctor fringilla dui suscipit eget. Vivamus id augue varius, vulputate turpis non, faucibus ipsum. Curabitur nec est eget justo pharetra condimentum. Sed sed luctus nulla. In aliquam risus quis ligula facilisis, quis luctus ipsum dignissim. Quisque justo massa, consequat ac risus fringilla, dictum aliquam orci. Praesent aliquam porttitor fringilla. Nulla commodo venenatis sollicitudin.

Vestibulum pellentesque sed neque quis ornare. Donec egestas eleifend dapibus. Vivamus maximus sed tellus vel faucibus. Morbi vel consectetur diam. Cras bibendum ex nec libero tempus pellentesque. Mauris facilisis posuere metus, vel pharetra ligula pretium quis. Phasellus quis felis tortor. Integer tempor id leo ut dapibus. Nunc non justo rutrum, malesuada risus eget, tristique arcu. Sed vitae dolor sed eros commodo suscipit a et erat. Morbi felis nunc, volutpat nec nunc nec, pharetra egestas justo. Nullam nec nisl eu orci egestas sagittis. Suspendisse augue velit, viverra vel lobortis non, lobortis in nisl. Vivamus commodo scelerisque leo ut semper. Proin ornare tortor eget eros varius euismod. Etiam tristique neque in metus porttitor, et finibus ligula condimentum.

Nam sit amet diam vel magna rutrum euismod nec et diam. Duis metus urna, ultricies nec semper ac, convallis in nisl. Nulla fermentum maximus massa sed eleifend. Pellentesque in iaculis urna. Morbi porttitor diam lectus, ut viverra eros fermentum in. Curabitur vehicula massa sit amet diam tincidunt tincidunt. Curabitur tincidunt pretium consectetur. Maecenas congue vitae tellus eget suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam auctor sollicitudin nisi a hendrerit. Phasellus sit amet massa a nisl fringilla dapibus. Maecenas sed sem et justo dapibus efficitur nec non diam.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed elit quis nunc rutrum volutpat blandit sed nisl. Duis vehicula ligula nec fringilla tristique. Fusce egestas magna quam. Fusce laoreet finibus rhoncus. Sed eget eleifend felis. Suspendisse et purus diam. Nullam et blandit erat. Nulla augue ipsum, molestie in ipsum sit amet, sagittis sollicitudin justo. Aenean tempor elit nunc, at venenatis velit luctus suscipit. Praesent purus est, pharetra a iaculis aliquet, luctus eu elit. Ut eget lorem dignissim, interdum ex vitae, blandit mauris. Sed auctor justo ut euismod tincidunt.

Vivamus quis purus a quam mollis placerat vel nec dui. Phasellus feugiat enim eu quam rutrum aliquet. Donec semper lacinia tellus, eget eleifend quam bibendum et. Nunc lobortis ac metus vel vulputate. Donec felis urna, pellentesque ac bibendum quis, pulvinar in felis. Nulla vitae elit tellus. Cras blandit lobortis diam, vel vulputate metus rutrum nec. Donec vel lacus sem. Sed malesuada fringilla commodo. Maecenas ornare leo sed nisl vulputate, a maximus ex tristique. Vestibulum a lacinia lacus, at suscipit justo. Pellentesque non enim vel augue vulputate laoreet. Aliquam ac laoreet ligula, sed volutpat elit. Cras tempus tempus pulvinar.

Aliquam sagittis mi eget tristique rhoncus. Morbi eu euismod dui, at elementum eros. Nulla feugiat sollicitudin libero a rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed scelerisque tristique ex, auctor fringilla dui suscipit eget. Vivamus id augue varius, vulputate turpis non, faucibus ipsum. Curabitur nec est eget justo pharetra condimentum. Sed sed luctus nulla. In aliquam risus quis ligula facilisis, quis luctus ipsum dignissim. Quisque justo massa, consequat ac risus fringilla, dictum aliquam orci. Praesent aliquam porttitor fringilla. Nulla commodo venenatis sollicitudin.

Vestibulum pellentesque sed neque quis ornare. Donec egestas eleifend dapibus. Vivamus maximus sed tellus vel faucibus. Morbi vel consectetur diam. Cras bibendum ex nec libero tempus pellentesque. Mauris facilisis posuere metus, vel pharetra ligula pretium quis. Phasellus quis felis tortor. Integer tempor id leo ut dapibus. Nunc non justo rutrum, malesuada risus eget, tristique arcu. Sed vitae dolor sed eros commodo suscipit a et erat. Morbi felis nunc, volutpat nec nunc nec, pharetra egestas justo. Nullam nec nisl eu orci egestas sagittis. Suspendisse augue velit, viverra vel lobortis non, lobortis in nisl. Vivamus commodo scelerisque leo ut semper. Proin ornare tortor eget eros varius euismod. Etiam tristique neque in metus porttitor, et finibus ligula condimentum.

Nam sit amet diam vel magna rutrum euismod nec et diam. Duis metus urna, ultricies nec semper ac, convallis in nisl. Nulla fermentum maximus massa sed eleifend. Pellentesque in iaculis urna. Morbi porttitor diam lectus, ut viverra eros fermentum in. Curabitur vehicula massa sit amet diam tincidunt tincidunt. Curabitur tincidunt pretium consectetur. Maecenas congue vitae tellus eget suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam auctor sollicitudin nisi a hendrerit. Phasellus sit amet massa a nisl fringilla dapibus. Maecenas sed sem et justo dapibus efficitur nec non diam.


</p>
      <Select value={stateData[0]} data={stateData} handleSelect={(newValue) => handleSelect(newValue)}  />
      <ul>
        <li>
          Bulbizarre
        </li>
        <li>
          Carapuce
        </li>
        <li>
          Salamèche
        </li>
      </ul>
    </div>
  );
}

export default App;
