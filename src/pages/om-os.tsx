import { Layout } from "@/components/inner-layout";
import { Badge } from "@/components/ui/badge";

export default function OmOs() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold inline italic">om os</h2>
      <div className="flex flex-col w-full mb-16">
        <div className="my-8 flex flex-col sm:flex-row items-start gap-12 lg:ml-44">
          <div className="flex flex-col gap-2 items-start max-w-[50ch]">
            <div className="flex items-baseline justify-between w-full">
              <h3 className="font-bold">Sigma Nico</h3>
              <div className="flex gap-2">
                <Badge variant="default">Pizza</Badge>
                <Badge variant="default">Fodbold</Badge>
                <Badge variant="default">Neger</Badge>
              </div>
            </div>
            <p>
              Jeg er sigma, den største af dem alle. Ingen bestemmer over mig,
              og jeg går altid min egen vej. Jeg står alene, men det er en
              styrke, ikke en svaghed. Jeg observerer, analyserer og handler
              præcist, når det er nødvendigt. Ingen sociale regler binder mig,
              og jeg har ikke behov for at imponere nogen. Mit fokus er skarpt,
              min selvtillid urokkelig, og mit drive ustoppeligt. Jeg leder ikke
              flokken – jeg skaber min egen sti i livet. Sigma er ikke blot en
              kategori, det er en livsfilosofi, en kraft, der definerer dem, der
              ikke kan placeres i bokse.
            </p>
          </div>
          <img
            src="https://cdn-0001.qstv.on.epicgames.com/UGEaCGnLHdgTkmEioX/image/landscape_comp.jpeg"
            className="lg:w-64 lg:h-64 sm:w-44 w-64 h-64 object-fill sm:h-44 rounded-lg self-start sm:self-center"
            alt=""
          />
        </div>
        <div className="my-8 flex flex-col sm:flex-row items-start gap-12 lg:ml-32">
          <div className="flex flex-col gap-2 items-start max-w-[50ch]">
            <div className="flex items-baseline justify-between w-full">
              <h3 className="font-bold">Beta Willy</h3>
              <div className="flex gap-2">
                <Badge variant="default">Skimester</Badge>
                <Badge variant="default">Adidas</Badge>
                <Badge variant="default">Avocado</Badge>
              </div>
            </div>{" "}
            <p>
              Jeg er beta, den loyale støtte og den solide ven. Jeg behøver ikke
              være centrum for opmærksomheden, for jeg ved, at min styrke ligger
              i fællesskabet. Jeg skaber tryghed, stabilitet og balance i en
              verden, der ofte er kaotisk. Jeg lytter, jeg hjælper, og jeg er
              der altid for dem, der har brug for mig. Det betyder ikke, at jeg
              er svag – tværtimod. Min styrke ligger i min evne til at
              samarbejde og løfte andre op. Jeg er rygraden i enhver gruppe, en
              vigtig del af helheden, og jeg ved, at min plads har betydning.
            </p>
          </div>
          <img
            src="https://wintersindustries.com/cdn/shop/products/phi-beta-sigma-3d-hologram-wall-art-artwork-winters-industries-215382_1800x.progressive.jpg?v=1688866087"
            className="lg:w-64 lg:h-64 sm:w-44 w-64 h-64 object-fill sm:h-44 rounded-lg self-start sm:self-center"
            alt=""
          />
        </div>
        <div className="my-8 flex flex-col sm:flex-row items-start gap-12 lg:ml-72">
          <div className="flex flex-col gap-2 items-start max-w-[50ch]">
            <div className="flex items-baseline justify-between w-full">
              <h3 className="font-bold">Alpha Seb</h3>
              <div className="flex gap-2">
                <Badge variant="default">Mazda</Badge>
                <Badge variant="default">Skak</Badge>
                <Badge variant="default">Gains</Badge>
              </div>
            </div>{" "}
            <p>
              Jeg er alpha, født til at lede og til at tage ansvar. Mit kald er
              at tage kontrol, at gå forrest og vise vejen for andre. Jeg søger
              altid det bedste resultat, og jeg stopper ikke, før målet er nået.
              Mine beslutninger er faste, min vision er klar, og mit mod er
              inspirerende for dem omkring mig. Jeg trives i rampelyset og bærer
              ansvaret med stolthed. Alpha er ikke kun en rolle – det er en
              tilstand af sindet. Jeg er her for at dominere, for at skabe
              forandring og for at efterlade et varigt indtryk på verden omkring
              mig.
            </p>
          </div>
          <img
            src="https://i1.sndcdn.com/artworks-Z45EGGaXSEE4kibv-LSpGDA-t500x500.jpg"
            className="lg:w-64 lg:h-64 sm:w-44 w-64 h-64 object-fill sm:h-44 rounded-lg self-start sm:self-center"
            alt=""
          />
        </div>
        <div className="my-8 flex flex-col sm:flex-row items-start gap-12 lg:ml-52">
          <div className="flex flex-col gap-2 items-start max-w-[50ch]">
            <div className="flex items-baseline justify-between w-full">
              <h3 className="font-bold">Omega Niels</h3>
              <div className="flex gap-2">
                <Badge variant="default">Volvo</Badge>
                <Badge variant="default">Brun sovs</Badge>
                <Badge variant="default">Booster</Badge>
              </div>
            </div>{" "}
            <p>
              Jeg er omega, den fredelige afslutning og den rolige begyndelse.
              Jeg står uden for hierarkiet, hvor jeg finder ro i mig selv. Jeg
              har ingen interesse i at konkurrere eller dominere – min styrke
              ligger i min selvindsigt og min evne til at finde balance. Jeg går
              mine egne veje, men ikke for at bevise noget. Jeg nyder livet i
              mit eget tempo og finder glæde i de små ting. Omega er ikke
              svaghed, men en bevidst afstandtagen fra unødig kamp. Jeg trives i
              det enkle, i det stille og i det autentiske – her ligger min
              styrke.
            </p>
          </div>
          <img
            src="https://external-preview.redd.it/STxyQPSZpFGkPlIQXbhM0FT_P7eio-OrexSq9MsLzlI.png?format=pjpg&auto=webp&s=73c2557fd4fd91fc761ff4ad532f1db4e257cff5"
            className="lg:w-64 lg:h-64 sm:w-44 w-64 h-64 object-fill sm:h-44 rounded-lg self-start sm:self-center"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
