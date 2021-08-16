const Panel = ({href, title, children}) => 
  <a href={href}>
    <div class="one-half column panel">
      <h4>{title}</h4>
        {children}
    </div>
  </a>

export default Panel
