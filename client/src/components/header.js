import Match from 'preact-router/match'
import withStyles from './jss'
import LogoutButton from './logout-button'

const Header = ({ classes, paths }) => {
  const loggedIn = localStorage.getItem('token') !== null

  return (
    <div class={`tab-container tabs-center ${classes.nav}`}>
      <ul class={classes.list}>
        <li class={classes.li}>
          <a href='/' class={classes.header}>
            ItemizeCTF
          </a>
        </li>
        {paths
          .filter(({ props: { path } }) => ['/', '/scores', '/challs'].includes(path))
          .map(({ props: { path, name } }) => (
            <Match key={name} path={path}>
              {({ matches }) => (
                <li class={`${matches ? 'selected' : ''} ${classes.li}`}>
                  <a href={path} class={classes.link}>
                    {name}
                  </a>
                </li>
              )}
            </Match>
          ))}
      </ul>
      <ul class={classes.list}>
        {paths
          .filter(({ props: { path } }) => ['/profile'].includes(path))
          .map(({ props: { path, name } }) => (
            <Match key={name} path={path}>
              {({ matches }) => (
                <li class={`${matches ? 'selected' : ''} ${classes.li}`}>
                  <a href={path} class={classes.link}>
                    {name}
                  </a>
                </li>
              )}
            </Match>
          ))}
        {!loggedIn && (
          <Match path={'/register'}>
            {({ matches }) => (
              <li class={`${matches ? 'selected' : ''} ${classes.li}`}>
                <a href={'/register'} class={classes.link}>
                  Register
                </a>
              </li>
            )}
          </Match>
        )}
        {loggedIn && (
          <li class={classes.li}>
            <LogoutButton class={classes.link} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default withStyles(
  {
    nav: {
      fontFamily: 'var(--body-font) !important',
      borderBottom: '1px solid rgba(255,255,255,0.2)',
      marginBottom: '20px'
    },
    link: {
      '&:focus': {
        boxShadow: 'none'
      },
      background: '#0000 !important',
      color: '#fff !important',
      padding: '.5rem .7rem !important',
      borderBottom: 'none !important'
    },
    header: {
      fontSize: '1.3rem',
      fontWeight: '700',
      fontFamily: 'var(--header-font) !important',
      backgroundColor: 'transparent !important',
      borderBottom: 'none !important',
      color: '#fff !important'
    },
    li: {
      display: 'flex !important',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'color 400ms',
      '&:hover a': {
        color: 'var(--cirrus-accent-hover) !important'
      }
    },
    list: {
      borderBottom: 'none !important',
      '& li.selected a': {
        color: 'var(--cirrus-primary) !important'
      }
    }
  },
  Header
)
