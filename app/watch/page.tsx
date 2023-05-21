export const head = {
  title: 'Watch - YouTube',
  description: 'Watch the best videos on YouTube',
};

export default function WatchPage({
  searchParams,
}: {
  searchParams: { v: string };
}) {
  return (
    <div className='relative bg-transparent'>
      <iframe
        style={{
          height: '100vh',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
        }}
        src={`https://www.youtube-nocookie.com/embed/${searchParams.v}?autoplay=1&rel=0&modestbranding=1&showinfo=0&fs=1&controls=1&enablejsapi=1&cc_load_policy=1&cc_lang_pref=en&hl=en&iv_load_policy=3`}
        frameBorder={0}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen={true}
        title='Embedded youtube'
      />
    </div>
  );
}
