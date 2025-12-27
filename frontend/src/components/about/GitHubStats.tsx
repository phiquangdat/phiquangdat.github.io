const GitHubStats = ({ username }: { username: string }) => {
  return (
    <div className="mt-12 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif text-center">
        GitHub Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&icon_color=3b82f6&text_color=374151`}
          alt="GitHub Stats"
          className="w-full h-auto rounded-xl border border-gray-200 bg-white p-2 shadow-sm"
        />

        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=374151`}
          alt="Top Languages"
          className="w-full h-auto rounded-xl border border-gray-200 bg-white p-2 shadow-sm"
        />
      </div>

      <div className="w-full">
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&stroke=3b82f6&ring=3b82f6&fire=3b82f6&currStreakLabel=3b82f6`}
          alt="GitHub Streak"
          className="w-full h-auto rounded-xl border border-gray-200 bg-white p-2 shadow-sm"
        />
      </div>
    </div>
  );
};

export default GitHubStats;
