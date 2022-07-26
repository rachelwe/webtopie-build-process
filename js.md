## Functions

<dl>
<dt><a href="#_select">_select(selector, [parent])</a> ⇒ <code>node</code></dt>
<dd><p>Helper fonction for querySelector()</p>
</dd>
<dt><a href="#_selectAll">_selectAll(selector, [parent])</a> ⇒ <code>Array.&lt;node&gt;</code></dt>
<dd><p>Helper fonction for querySelectorAll()</p>
</dd>
</dl>

<a name="_select"></a>

## \_select(selector, [parent]) ⇒ <code>node</code>
Helper fonction for querySelector()

**Kind**: global function  
**Returns**: <code>node</code> - DOM Element queried  
**Source**: https://gomakethings.com/an-easier-way-to-get-elements-in-the-dom-with-vanilla-js/  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>string</code> |  | String query to look for |
| [parent] | <code>node</code> | <code>document</code> | Optional parent of the query |

**Example**  
```js
const nodeParent = _select('.my-element');  const node = _select('.my-child-element', nodeParent);
```
<a name="_selectAll"></a>

## \_selectAll(selector, [parent]) ⇒ <code>Array.&lt;node&gt;</code>
Helper fonction for querySelectorAll()

**Kind**: global function  
**Returns**: <code>Array.&lt;node&gt;</code> - Array of DOM Elements queried  
**Source**: https://gomakethings.com/an-easier-way-to-get-elements-in-the-dom-with-vanilla-js/  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>string</code> |  | String query to look for |
| [parent] | <code>node</code> | <code>document</code> | Optional parent of the query |

