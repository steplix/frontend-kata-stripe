import type {NextPage} from "next";

import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-[#180228] min-h-screen grid grid-rows-[70px,1fr,70px]">
      <Head>
        <title>Steplix Front End Base</title>
        <meta content="Steplix Front End Base" name="description" />
        <meta content="noindex" name="robots" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <header className="bg-[#180228] w-full">
        <nav className="w-full flex items-center justify-start p-4 border-white border-b-[0.5px]">
          <img alt="Steplix logo" height="30px" src="/assets/images/steplix.svg" width="120px" />
        </nav>
      </header>
      <main className="grid lg:grid-cols-[300px,1fr] grid-rows-[100px,1fr] gap-4 lg:grid-rows-1 w-full bg-[#180228] mt-4">
        <aside className="text-white w-full h-full flex items-center justify-center border-white border-[0.5px]">
          <h3 className="text-xl font-bold">Sidebar</h3>
        </aside>
        <section>
          <article className="text-white w-full h-full flex flex-col text-center space-y-8 items-center justify-center border-white border-[0.5px] p-4">
            <h1 className="text-3xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Steplix Front End Base
            </h1>
            <p className="lg:max-w-4xl max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur,
              dolores, deleniti ipsam iure blanditiis eum quam cum distinctio quidem quis amet ut
              voluptatem dolorum nisi! Esse inventore molestiae doloremque neque, sequi sunt cum
              temporibus ipsam aliquid totam distinctio deleniti? Esse quod fugit velit vitae.
              Dolorem odit quibusdam ipsum libero!
            </p>
          </article>
        </section>
      </main>
      <footer className="w-full flex items-center justify-center p-4 bg-[#180228] border-white border-t-[0.5px] mt-4" />
    </div>
  );
};

export default Home;
