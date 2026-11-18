#!/usr/bin/env node
// @generated : script compilé depuis le moteur de Locameublé (https://locameuble.fr). Licence MIT.
import process from "node:process";
// src/lib/encadrement/donnees/zones-tendues.json
var texte$2 = "Décret n° 2013-392 du 10 mai 2013, annexe 1° (agglomérations de plus de 50 000 habitants), dernière modification par le décret n° 2025-1267 du 22 décembre 2025";
var usage = "Préavis d'un mois (loi du 6 juillet 1989, art. 15) et limitation de la hausse à la relocation (décret n° 2017-1198, renouvelé par le décret n° 2026-644 du 20 juillet 2026 pour les baux conclus du 1er août 2026 au 31 juillet 2027).";
var valideJusquau = "2026-12-31";
var remplacement = "Le décret n° 2026-831 du 25 août 2026 abroge le décret n° 2013-392 au 1er janvier 2027 (taxe sur la vacance des locaux d'habitation). Vérifier la liste qui sert au droit locatif à partir de cette date.";
var legifrance = "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000027399823/";
var donnees$9 = "https://gitlab.com/pidila/sp-simulateurs-data/-/raw/master/donnees-de-reference/TaxeLogementVacant.json";
var decretEvolution = {
	"numero": "Décret n° 2026-644 du 20 juillet 2026 modifiant le décret n° 2017-1198",
	"baux": {
		"du": "2026-08-01",
		"au": "2027-07-31"
	},
	"source": "https://www.anil.org/analyse-juridique-encadrement-evolution-loyers-zones-tendues/"
};
var recupereLe = "2026-11-12";
var communes$9 = [
	["01030", "Beauregard"],
	["01043", "Beynost"],
	["01049", "La Boisse"],
	["01142", "Dagneux"],
	["01157", "Fareins"],
	["01160", "Ferney-Voltaire"],
	["01166", "Frans"],
	["01194", "Jassans-Riottier"],
	["01238", "Massieux"],
	["01249", "Miribel"],
	["01250", "Misérieux"],
	["01262", "Montluel"],
	["01275", "Neyron"],
	["01281", "Ornex"],
	["01285", "Parcieux"],
	["01313", "Prévessin-Moëns"],
	["01322", "Reyrieux"],
	["01339", "Saint-Bernard"],
	["01347", "Saint-Didier-de-Formans"],
	["01353", "Sainte-Euphémie"],
	["01354", "Saint-Genis-Pouilly"],
	["01376", "Saint-Maurice-de-Beynost"],
	["01401", "Sergy"],
	["01419", "Thoiry"],
	["01423", "Toussieux"],
	["01427", "Trévoux"],
	["06004", "Antibes"],
	["06006", "Aspremont"],
	["06007", "Auribeau-sur-Siagne"],
	["06010", "Le Bar-sur-Loup"],
	["06011", "Beaulieu-sur-Mer"],
	["06012", "Beausoleil"],
	["06015", "Berre-les-Alpes"],
	["06018", "Biot"],
	["06026", "Cabris"],
	["06027", "Cagnes-sur-Mer"],
	["06029", "Cannes"],
	["06030", "Le Cannet"],
	["06031", "Cantaron"],
	["06032", "Cap-d'Ail"],
	["06033", "Carros"],
	["06034", "Castagniers"],
	["06035", "Castellar"],
	["06038", "Châteauneuf-Grasse"],
	["06039", "Châteauneuf-Villevieille"],
	["06044", "La Colle-sur-Loup"],
	["06046", "Colomars"],
	["06048", "Contes"],
	["06054", "Drap"],
	["06059", "Èze"],
	["06060", "Falicon"],
	["06064", "Gattières"],
	["06065", "La Gaude"],
	["06067", "Gorbio"],
	["06068", "Gourdon"],
	["06069", "Grasse"],
	["06079", "Mandelieu-la-Napoule"],
	["06083", "Menton"],
	["06084", "Mouans-Sartoux"],
	["06085", "Mougins"],
	["06088", "Nice"],
	["06089", "Opio"],
	["06090", "Pégomas"],
	["06095", "Peymeinade"],
	["06104", "Roquebrune-Cap-Martin"],
	["06105", "Roquefort-les-Pins"],
	["06108", "La Roquette-sur-Siagne"],
	["06112", "Le Rouret"],
	["06113", "Sainte-Agnès"],
	["06114", "Saint-André-de-la-Roche"],
	["06121", "Saint-Jean-Cap-Ferrat"],
	["06122", "Saint-Jeannet"],
	["06123", "Saint-Laurent-du-Var"],
	["06128", "Saint-Paul-de-Vence"],
	["06137", "Spéracèdes"],
	["06138", "Théoule-sur-Mer"],
	["06140", "Le Tignet"],
	["06147", "Tourrette-Levens"],
	["06148", "Tourrettes-sur-Loup"],
	["06149", "La Trinité"],
	["06150", "La Turbie"],
	["06152", "Valbonne"],
	["06155", "Vallauris"],
	["06157", "Vence"],
	["06159", "Villefranche-sur-Mer"],
	["06161", "Villeneuve-Loubet"],
	["13001", "Aix-en-Provence"],
	["13002", "Allauch"],
	["13004", "Arles"],
	["13005", "Aubagne"],
	["13007", "Auriol"],
	["13009", "La Barben"],
	["13010", "Barbentane"],
	["13012", "Beaurecueil"],
	["13014", "Berre-l'Étang"],
	["13015", "Bouc-Bel-Air"],
	["13016", "La Bouilladisse"],
	["13018", "Cabannes"],
	["13019", "Cabriès"],
	["13020", "Cadolive"],
	["13023", "Ceyreste"],
	["13025", "Châteauneuf-le-Rouge"],
	["13026", "Châteauneuf-les-Martigues"],
	["13027", "Châteaurenard"],
	["13028", "La Ciotat"],
	["13031", "La Destrousse"],
	["13032", "Éguilles"],
	["13034", "Eygalières"],
	["13036", "Eyragues"],
	["13039", "Fos-sur-Mer"],
	["13040", "Fuveau"],
	["13041", "Gardanne"],
	["13042", "Gémenos"],
	["13043", "Gignac-la-Nerthe"],
	["13044", "Grans"],
	["13045", "Graveson"],
	["13046", "Gréasque"],
	["13047", "Istres"],
	["13052", "Maillane"],
	["13054", "Marignane"],
	["13055", "Marseille"],
	["13056", "Martigues"],
	["13060", "Meyreuil"],
	["13062", "Mimet"],
	["13063", "Miramas"],
	["13064", "Mollégès"],
	["13066", "Noves"],
	["13069", "Pélissanne"],
	["13070", "La Penne-sur-Huveaune"],
	["13071", "Les Pennes-Mirabeau"],
	["13072", "Peynier"],
	["13073", "Peypin"],
	["13075", "Plan-de-Cuques"],
	["13076", "Plan-d'Orgon"],
	["13077", "Port-de-Bouc"],
	["13081", "Rognac"],
	["13083", "Rognonas"],
	["13086", "Roquevaire"],
	["13087", "Rousset"],
	["13089", "Saint-Andiol"],
	["13092", "Saint-Chamas"],
	["13095", "Saint-Marc-Jaumegarde"],
	["13098", "Saint-Mitre-les-Remparts"],
	["13101", "Saint-Savournin"],
	["13102", "Saint-Victoret"],
	["13103", "Salon-de-Provence"],
	["13106", "Septèmes-les-Vallons"],
	["13107", "Simiane-Collongue"],
	["13109", "Le Tholonet"],
	["13110", "Trets"],
	["13112", "Velaux"],
	["13113", "Venelles"],
	["13114", "Ventabren"],
	["13116", "Verquières"],
	["13117", "Vitrolles"],
	["14042", "Baron-sur-Odon"],
	["14068", "Biéville-Beuville"],
	["14101", "Bretteville-sur-Odon"],
	["14118", "Caen"],
	["14137", "Carpiquet"],
	["14167", "Colombelles"],
	["14181", "Cormelles-le-Royal"],
	["14215", "Cuverville"],
	["14221", "Démouville"],
	["14242", "Épron"],
	["14271", "Fleury-sur-Orne"],
	["14274", "Fontaine-Étoupefour"],
	["14301", "Giberville"],
	["14311", "Grainville-sur-Odon"],
	["14319", "Grentheville"],
	["14327", "Hérouville-Saint-Clair"],
	["14341", "Ifs"],
	["14437", "Mondeville"],
	["14438", "Mondrainville"],
	["14454", "Mouen"],
	["14543", "Rots"],
	["14587", "Saint-Germain-la-Blanche-Herbe"],
	["14707", "Tourville-sur-Odon"],
	["14738", "Verson"],
	["17010", "Angoulins"],
	["17028", "Aytré"],
	["17094", "Châtelaillon-Plage"],
	["17142", "Dompierre-sur-Mer"],
	["17190", "L'Houmeau"],
	["17200", "Lagord"],
	["17264", "Nieul-sur-Mer"],
	["17274", "Périgny"],
	["17291", "Puilboreau"],
	["17300", "La Rochelle"],
	["17420", "Salles-sur-Mer"],
	["2A001", "Afa"],
	["2A004", "Ajaccio"],
	["2A006", "Alata"],
	["2A017", "Appietto"],
	["2A271", "Sarrola-Carcopino"],
	["2B033", "Bastia"],
	["2B037", "Biguglia"],
	["2B043", "Brando"],
	["2B120", "Furiani"],
	["2B305", "San-Martino-di-Lota"],
	["2B309", "Santa-Maria-di-Lota"],
	["2B353", "Ville-di-Pietrabugno"],
	["30004", "Aigues-Vives"],
	["30011", "Les Angles"],
	["30019", "Aubais"],
	["30036", "Bernis"],
	["30060", "Caissargues"],
	["30075", "Caveirac"],
	["30117", "Fourques"],
	["30123", "Gallargues-le-Montueux"],
	["30156", "Marguerittes"],
	["30169", "Milhaud"],
	["30189", "Nîmes"],
	["30333", "Uchaud"],
	["30347", "Vestric-et-Candiac"],
	["30351", "Villeneuve-lès-Avignon"],
	["30356", "Rodilhan"],
	["31022", "Aucamville"],
	["31032", "Aussonne"],
	["31035", "Auzeville-Tolosane"],
	["31044", "Balma"],
	["31053", "Beaupuy"],
	["31056", "Beauzelle"],
	["31057", "Belberaud"],
	["31069", "Blagnac"],
	["31079", "Bouloc"],
	["31088", "Brax"],
	["31091", "Bruguières"],
	["31113", "Castanet-Tolosan"],
	["31116", "Castelginest"],
	["31117", "Castelmaurou"],
	["31118", "Castelnau-d'Estrétefonds"],
	["31136", "Cépet"],
	["31149", "Colomiers"],
	["31150", "Cornebarrieu"],
	["31157", "Cugnaux"],
	["31160", "Daux"],
	["31161", "Deyme"],
	["31165", "Eaunes"],
	["31169", "Escalquens"],
	["31182", "Fenouillet"],
	["31186", "Fonbeauzard"],
	["31187", "Fonsorbes"],
	["31188", "Fontenilles"],
	["31203", "Frouzins"],
	["31205", "Gagnac-sur-Garonne"],
	["31230", "Gratentour"],
	["31248", "Labarthe-sur-Lèze"],
	["31252", "Labastide-Saint-Sernin"],
	["31254", "Labège"],
	["31259", "Lacroix-Falgarde"],
	["31273", "Lapeyrouse-Fossat"],
	["31282", "Launaguet"],
	["31291", "Léguevin"],
	["31293", "Lespinasse"],
	["31340", "Mervilla"],
	["31351", "Mondonville"],
	["31352", "Mondouzil"],
	["31364", "Montberon"],
	["31389", "Montrabé"],
	["31395", "Muret"],
	["31409", "Péchabou"],
	["31410", "Pechbonnieu"],
	["31411", "Pechbusque"],
	["31417", "Pibrac"],
	["31420", "Pinsaguel"],
	["31421", "Pins-Justaret"],
	["31424", "Plaisance-du-Touch"],
	["31429", "Pompertuzat"],
	["31433", "Portet-sur-Garonne"],
	["31445", "Quint-Fonsegrives"],
	["31446", "Ramonville-Saint-Agne"],
	["31458", "Roques"],
	["31460", "Roquettes"],
	["31462", "Rouffiac-Tolosan"],
	["31467", "Saint-Alban"],
	["31484", "Saint-Geniès-Bellevue"],
	["31488", "Saint-Jean"],
	["31490", "Saint-Jory"],
	["31497", "Saint-Loup-Cammas"],
	["31506", "Saint-Orens-de-Gameville"],
	["31515", "Saint-Rustice"],
	["31516", "Saint-Sauveur"],
	["31526", "La Salvetat-Saint-Gilles"],
	["31533", "Saubens"],
	["31541", "Seilh"],
	["31547", "Seysses"],
	["31555", "Toulouse"],
	["31557", "Tournefeuille"],
	["31561", "L'Union"],
	["31563", "Vacquiers"],
	["31575", "Vieille-Toulouse"],
	["31578", "Vigoulet-Auzil"],
	["31580", "Villate"],
	["31587", "Villeneuve-lès-Bouloc"],
	["31588", "Villeneuve-Tolosane"],
	["33003", "Ambarès-et-Lagrave"],
	["33009", "Arcachon"],
	["33013", "Artigues-près-Bordeaux"],
	["33015", "Arveyres"],
	["33018", "Val de Virvée"],
	["33032", "Bassens"],
	["33033", "Baurech"],
	["33039", "Bègles"],
	["33049", "Beychac-et-Caillau"],
	["33056", "Blanquefort"],
	["33061", "Bonnetan"],
	["33063", "Bordeaux"],
	["33065", "Bouliac"],
	["33069", "Le Bouscat"],
	["33075", "Bruges"],
	["33079", "Cadarsac"],
	["33080", "Cadaujac"],
	["33084", "Cambes"],
	["33085", "Camblanes-et-Meynac"],
	["33090", "Canéjan"],
	["33096", "Carbon-Blanc"],
	["33099", "Carignan-de-Bordeaux"],
	["33118", "Cénac"],
	["33119", "Cenon"],
	["33122", "Cestas"],
	["33143", "Cubzac-les-Ponts"],
	["33162", "Eysines"],
	["33165", "Fargues-Saint-Hilaire"],
	["33167", "Floirac"],
	["33192", "Gradignan"],
	["33199", "Gujan-Mestras"],
	["33200", "Le Haillan"],
	["33207", "Izon"],
	["33226", "Langoiran"],
	["33234", "Latresne"],
	["33238", "Léognan"],
	["33241", "Lestiac-sur-Garonne"],
	["33245", "Lignan-de-Bordeaux"],
	["33249", "Lormont"],
	["33273", "Martignas-sur-Jalle"],
	["33274", "Martillac"],
	["33281", "Mérignac"],
	["33293", "Montussan"],
	["33303", "Nérigean"],
	["33311", "Paillet"],
	["33312", "Parempuyre"],
	["33318", "Pessac"],
	["33322", "Le Pian-Médoc"],
	["33330", "Pompignac"],
	["33339", "Prignac-et-Marcamps"],
	["33349", "Quinsac"],
	["33363", "Sadirac"],
	["33366", "Saint-André-de-Cubzac"],
	["33376", "Saint-Aubin-de-Médoc"],
	["33381", "Saint-Caprais-de-Bordeaux"],
	["33397", "Sainte-Eulalie"],
	["33415", "Saint-Gervais"],
	["33422", "Saint-Jean-d'Illac"],
	["33425", "Saint-Laurent-d'Arce"],
	["33433", "Saint-Loubès"],
	["33448", "Saint-Médard-d'Eyrans"],
	["33449", "Saint-Médard-en-Jalles"],
	["33466", "Saint-Quentin-de-Baron"],
	["33483", "Saint-Sulpice-et-Cameyrac"],
	["33487", "Saint-Vincent-de-Paul"],
	["33496", "Sallebœuf"],
	["33518", "Tabanac"],
	["33519", "Le Taillan-Médoc"],
	["33522", "Talence"],
	["33527", "Le Teich"],
	["33529", "La Teste-de-Buch"],
	["33534", "Le Tourne"],
	["33535", "Tresses"],
	["33539", "Vayres"],
	["33550", "Villenave-d'Ornon"],
	["33553", "Virsac"],
	["33554", "Yvrac"],
	["34014", "Assas"],
	["34023", "Balaruc-les-Bains"],
	["34024", "Balaruc-le-Vieux"],
	["34057", "Castelnau-le-Lez"],
	["34077", "Clapiers"],
	["34090", "Le Crès"],
	["34095", "Fabrègues"],
	["34108", "Frontignan"],
	["34113", "Gigean"],
	["34116", "Grabels"],
	["34120", "Jacou"],
	["34123", "Juvignac"],
	["34129", "Lattes"],
	["34134", "Lavérune"],
	["34145", "Lunel"],
	["34146", "Lunel-Viel"],
	["34151", "Marsillargues"],
	["34165", "Montbazin"],
	["34169", "Montferrier-sur-Lez"],
	["34172", "Montpellier"],
	["34198", "Pérols"],
	["34213", "Poussan"],
	["34217", "Prades-le-Lez"],
	["34247", "Saint-Clément-de-Rivière"],
	["34255", "Saint-Gély-du-Fesc"],
	["34270", "Saint-Jean-de-Védas"],
	["34272", "Saint-Just"],
	["34280", "Saint-Nazaire-de-Pézan"],
	["34290", "Saint-Vincent-de-Barbeyrargues"],
	["34295", "Saussan"],
	["34301", "Sète"],
	["34309", "Teyran"],
	["34327", "Vendargues"],
	["34337", "Villeneuve-lès-Maguelone"],
	["34340", "Villetelle"],
	["35024", "Betton"],
	["35047", "Bruz"],
	["35051", "Cesson-Sévigné"],
	["35055", "Chantepie"],
	["35059", "La Chapelle-des-Fougeretz"],
	["35066", "Chartres-de-Bretagne"],
	["35173", "Melesse"],
	["35189", "Montgermont"],
	["35206", "Noyal-Châtillon-sur-Seiche"],
	["35210", "Pacé"],
	["35238", "Rennes"],
	["35278", "Saint-Grégoire"],
	["35281", "Saint-Jacques-de-la-Lande"],
	["35334", "Thorigné-Fouillard"],
	["35353", "Vezin-le-Coquet"],
	["35363", "Pont-Péan"],
	["38045", "Biviers"],
	["38057", "Bresson"],
	["38070", "Le Champ-près-Froges"],
	["38071", "Champ-sur-Drac"],
	["38087", "Chasse-sur-Rhône"],
	["38111", "Claix"],
	["38126", "Corenc"],
	["38150", "Domène"],
	["38151", "Échirolles"],
	["38158", "Eybens"],
	["38169", "Fontaine"],
	["38170", "Fontanil-Cornillon"],
	["38175", "Froges"],
	["38179", "Gières"],
	["38185", "Grenoble"],
	["38200", "Jarrie"],
	["38229", "Meylan"],
	["38249", "Montbonnot-Saint-Martin"],
	["38271", "Murianette"],
	["38281", "Noyarey"],
	["38303", "La Pierre"],
	["38309", "Poisat"],
	["38317", "Le Pont-de-Claix"],
	["38382", "Saint-Égrève"],
	["38397", "Saint-Ismier"],
	["38421", "Saint-Martin-d'Hères"],
	["38423", "Saint-Martin-le-Vinoux"],
	["38431", "Saint-Nazaire-les-Eymes"],
	["38474", "Sassenage"],
	["38485", "Seyssinet-Pariset"],
	["38486", "Seyssins"],
	["38501", "Tencin"],
	["38516", "La Tronche"],
	["38524", "Varces-Allières-et-Risset"],
	["38533", "Venon"],
	["38538", "Le Versoud"],
	["38540", "Veurey-Voroize"],
	["38547", "Villard-Bonnot"],
	["38565", "Voreppe"],
	["40248", "Saint-André-de-Seignanx"],
	["40273", "Saint-Martin-de-Seignanx"],
	["40312", "Tarnos"],
	["44009", "Basse-Goulaine"],
	["44010", "Batz-sur-Mer"],
	["44018", "Bouaye"],
	["44020", "Bouguenais"],
	["44026", "Carquefou"],
	["44035", "La Chapelle-sur-Erdre"],
	["44047", "Couëron"],
	["44049", "Le Croisic"],
	["44052", "Donges"],
	["44055", "La Baule-Escoublac"],
	["44069", "Guérande"],
	["44071", "Haute-Goulaine"],
	["44074", "Indre"],
	["44101", "La Montagne"],
	["44103", "Montoir-de-Bretagne"],
	["44109", "Nantes"],
	["44114", "Orvault"],
	["44126", "La Plaine-sur-Mer"],
	["44130", "Pont-Saint-Martin"],
	["44132", "Pornichet"],
	["44135", "Le Pouliguen"],
	["44136", "Préfailles"],
	["44143", "Rezé"],
	["44150", "Saint-Aignan-Grandlieu"],
	["44151", "Saint-André-des-Eaux"],
	["44154", "Saint-Brevin-les-Pins"],
	["44162", "Saint-Herblain"],
	["44166", "Saint-Jean-de-Boiseau"],
	["44168", "Saint-Joachim"],
	["44172", "Sainte-Luce-sur-Loire"],
	["44176", "Saint-Malo-de-Guersac"],
	["44182", "Saint-Michel-Chef-Chef"],
	["44184", "Saint-Nazaire"],
	["44190", "Saint-Sébastien-sur-Loire"],
	["44194", "Sautron"],
	["44198", "Les Sorinières"],
	["44204", "Thouaré-sur-Loire"],
	["44210", "Trignac"],
	["44215", "Vertou"],
	["45034", "Boigny-sur-Bionne"],
	["45075", "La Chapelle-Saint-Mesmin"],
	["45089", "Chécy"],
	["45100", "Combleux"],
	["45147", "Fleury-les-Aubrais"],
	["45169", "Ingré"],
	["45194", "Mardié"],
	["45232", "Olivet"],
	["45234", "Orléans"],
	["45235", "Ormes"],
	["45272", "Saint-Cyr-en-Val"],
	["45274", "Saint-Denis-en-Val"],
	["45282", "Saint-Hilaire-Saint-Mesmin"],
	["45284", "Saint-Jean-de-Braye"],
	["45285", "Saint-Jean-de-la-Ruelle"],
	["45286", "Saint-Jean-le-Blanc"],
	["45298", "Saint-Pryvé-Saint-Mesmin"],
	["45302", "Saran"],
	["45308", "Semoy"],
	["59009", "Villeneuve-d'Ascq"],
	["59013", "Anstaing"],
	["59034", "Avelin"],
	["59044", "Baisieux"],
	["59090", "Bondues"],
	["59098", "Bousbecque"],
	["59128", "Capinghem"],
	["59146", "Chéreng"],
	["59152", "Comines"],
	["59163", "Croix"],
	["59193", "Emmerin"],
	["59195", "Englos"],
	["59220", "Faches-Thumesnil"],
	["59247", "Forest-sur-Marque"],
	["59275", "Gruson"],
	["59278", "Hallennes-lez-Haubourdin"],
	["59279", "Halluin"],
	["59286", "Haubourdin"],
	["59299", "Hem"],
	["59328", "Lambersart"],
	["59332", "Lannoy"],
	["59339", "Leers"],
	["59343", "Lesquin"],
	["59346", "Lezennes"],
	["59350", "Lille"],
	["59352", "Linselles"],
	["59356", "Lompret"],
	["59360", "Loos"],
	["59367", "Lys-lez-Lannoy"],
	["59368", "La Madeleine"],
	["59378", "Marcq-en-Barœul"],
	["59386", "Marquette-lez-Lille"],
	["59410", "Mons-en-Barœul"],
	["59421", "Mouvaux"],
	["59426", "Neuville-en-Ferrain"],
	["59437", "Noyelles-lès-Seclin"],
	["59457", "Pérenchies"],
	["59470", "Prémesques"],
	["59482", "Quesnoy-sur-Deûle"],
	["59507", "Ronchin"],
	["59508", "Roncq"],
	["59512", "Roubaix"],
	["59522", "Sailly-lez-Lannoy"],
	["59527", "Saint-André-lez-Lille"],
	["59553", "Santes"],
	["59560", "Seclin"],
	["59566", "Sequedin"],
	["59585", "Templemars"],
	["59598", "Toufflers"],
	["59599", "Tourcoing"],
	["59602", "Tressin"],
	["59609", "Vendeville"],
	["59611", "Verlinghem"],
	["59636", "Wambrechies"],
	["59643", "Warneton"],
	["59646", "Wasquehal"],
	["59648", "Wattignies"],
	["59650", "Wattrelos"],
	["59656", "Wervicq-Sud"],
	["59660", "Willems"],
	["60013", "Angicourt"],
	["60074", "Blaincourt-lès-Précy"],
	["60102", "Brenouille"],
	["60134", "Cauffry"],
	["60154", "Cinqueux"],
	["60173", "Cramoisy"],
	["60175", "Creil"],
	["60342", "Laigneville"],
	["60360", "Liancourt"],
	["60404", "Mogneville"],
	["60406", "Monceaux"],
	["60409", "Monchy-Saint-Éloi"],
	["60414", "Montataire"],
	["60463", "Nogent-sur-Oise"],
	["60513", "Précy-sur-Oise"],
	["60524", "Rantigny"],
	["60539", "Rieux"],
	["60584", "Saint-Leu-d'Esserent"],
	["60589", "Saint-Maximin"],
	["60635", "Thiverny"],
	["60670", "Verneuil-en-Halatte"],
	["60684", "Villers-Saint-Paul"],
	["60686", "Villers-sous-Saint-Leu"],
	["64009", "Ahetze"],
	["64024", "Anglet"],
	["64035", "Arbonne"],
	["64038", "Arcangues"],
	["64065", "Ascain"],
	["64100", "Bassussarry"],
	["64102", "Bayonne"],
	["64122", "Biarritz"],
	["64125", "Bidart"],
	["64130", "Biriatou"],
	["64140", "Boucau"],
	["64160", "Cambo-les-Bains"],
	["64189", "Ciboure"],
	["64213", "Espelette"],
	["64249", "Guéthary"],
	["64255", "Halsou"],
	["64260", "Hendaye"],
	["64282", "Jatxou"],
	["64304", "Lahonce"],
	["64317", "Larressore"],
	["64407", "Mouguerre"],
	["64483", "Saint-Jean-de-Luz"],
	["64496", "Saint-Pierre-d'Irube"],
	["64540", "Urcuit"],
	["64545", "Urrugne"],
	["64547", "Ustaritz"],
	["64558", "Villefranque"],
	["66002", "Alénya"],
	["66008", "Argelès-sur-Mer"],
	["66053", "Collioure"],
	["66059", "Corneilla-del-Vercol"],
	["66065", "Elne"],
	["66093", "Laroque-des-Albères"],
	["66094", "Latour-Bas-Elne"],
	["66133", "Palau-del-Vidre"],
	["66148", "Port-Vendres"],
	["66168", "Saint-André"],
	["66171", "Saint-Cyprien"],
	["66196", "Sorède"],
	["66208", "Théza"],
	["66225", "Villelongue-dels-Monts"],
	["67001", "Achenheim"],
	["67043", "Bischheim"],
	["67118", "Eckbolsheim"],
	["67131", "Eschau"],
	["67137", "Fegersheim"],
	["67204", "Hœnheim"],
	["67218", "Illkirch-Graffenstaden"],
	["67256", "Lampertheim"],
	["67267", "Lingolsheim"],
	["67268", "Lipsheim"],
	["67296", "Mittelhausbergen"],
	["67309", "Mundolsheim"],
	["67326", "Niederhausbergen"],
	["67343", "Oberhausbergen"],
	["67350", "Oberschaeffolsheim"],
	["67365", "Ostwald"],
	["67378", "Plobsheim"],
	["67389", "Reichstett"],
	["67447", "Schiltigheim"],
	["67471", "Souffelweyersheim"],
	["67482", "Strasbourg"],
	["67506", "Vendenheim"],
	["67551", "Wolfisheim"],
	["69003", "Albigny-sur-Saône"],
	["69005", "Ambérieux"],
	["69009", "Anse"],
	["69013", "Arnas"],
	["69020", "Belmont-d'Azergues"],
	["69027", "Brignais"],
	["69028", "Brindas"],
	["69029", "Bron"],
	["69033", "Cailloux-sur-Fontaines"],
	["69034", "Caluire-et-Cuire"],
	["69040", "Champagne-au-Mont-d'Or"],
	["69043", "Chaponost"],
	["69044", "Charbonnières-les-Bains"],
	["69046", "Charly"],
	["69047", "Charnay"],
	["69049", "Chasselay"],
	["69052", "Chazay-d'Azergues"],
	["69055", "Les Chères"],
	["69059", "Civrieux-d'Azergues"],
	["69061", "Cogny"],
	["69063", "Collonges-au-Mont-d'Or"],
	["69068", "Couzon-au-Mont-d'Or"],
	["69069", "Craponne"],
	["69071", "Curis-au-Mont-d'Or"],
	["69072", "Dardilly"],
	["69074", "Denicé"],
	["69076", "Dommartin"],
	["69081", "Écully"],
	["69085", "Fleurieu-sur-Saône"],
	["69087", "Fontaines-Saint-Martin"],
	["69088", "Fontaines-sur-Saône"],
	["69089", "Francheville"],
	["69091", "Givors"],
	["69092", "Gleizé"],
	["69094", "Grézieu-la-Varenne"],
	["69096", "Grigny"],
	["69100", "Irigny"],
	["69105", "Lacenas"],
	["69106", "Lachassagne"],
	["69112", "Lentilly"],
	["69115", "Limas"],
	["69116", "Limonest"],
	["69117", "Lissieu"],
	["69118", "Loire-sur-Rhône"],
	["69121", "Lozanne"],
	["69122", "Lucenay"],
	["69123", "Lyon"],
	["69125", "Marcilly-d'Azergues"],
	["69126", "Marcy"],
	["69127", "Marcy-l'Étoile"],
	["69131", "Messimy"],
	["69133", "Millery"],
	["69136", "Montagny"],
	["69140", "Morancé"],
	["69142", "La Mulatière"],
	["69143", "Neuville-sur-Saône"],
	["69148", "Orliénas"],
	["69149", "Oullins"],
	["69152", "Pierre-Bénite"],
	["69156", "Pommiers"],
	["69159", "Porte des Pierres Dorées"],
	["69168", "Rochetaillée-sur-Saône"],
	["69190", "Sainte-Consorce"],
	["69191", "Saint-Cyr-au-Mont-d'Or"],
	["69194", "Saint-Didier-au-Mont-d'Or"],
	["69199", "Saint-Fons"],
	["69202", "Sainte-Foy-lès-Lyon"],
	["69204", "Saint-Genis-Laval"],
	["69205", "Saint-Genis-les-Ollières"],
	["69212", "Saint-Jean-des-Vignes"],
	["69233", "Saint-Romain-au-Mont-d'Or"],
	["69241", "Taluyers"],
	["69244", "Tassin-la-Demi-Lune"],
	["69249", "Thurins"],
	["69250", "La Tour-de-Salvagny"],
	["69255", "Vaugneray"],
	["69256", "Vaulx-en-Velin"],
	["69259", "Vénissieux"],
	["69260", "Vernaison"],
	["69264", "Villefranche-sur-Saône"],
	["69266", "Villeurbanne"],
	["69268", "Vourles"],
	["69270", "Chaponnay"],
	["69271", "Chassieu"],
	["69272", "Communay"],
	["69273", "Corbas"],
	["69275", "Décines-Charpieu"],
	["69276", "Feyzin"],
	["69277", "Genas"],
	["69278", "Genay"],
	["69281", "Marennes"],
	["69282", "Meyzieu"],
	["69283", "Mions"],
	["69284", "Montanay"],
	["69286", "Rillieux-la-Pape"],
	["69290", "Saint-Priest"],
	["69291", "Saint-Symphorien-d'Ozon"],
	["69292", "Sathonay-Camp"],
	["69293", "Sathonay-Village"],
	["69294", "Sérézin-du-Rhône"],
	["69296", "Solaize"],
	["69297", "Ternay"],
	["69298", "Toussieu"],
	["73008", "Aix-les-Bains"],
	["73017", "Apremont"],
	["73029", "Barberaz"],
	["73030", "Barby"],
	["73031", "Bassens"],
	["73050", "Bourdeau"],
	["73051", "Le Bourget-du-Lac"],
	["73059", "Brison-Saint-Innocent"],
	["73064", "Challes-les-Eaux"],
	["73065", "Chambéry"],
	["73084", "Chignin"],
	["73087", "Cognin"],
	["73103", "Drumettaz-Clarafond"],
	["73128", "Grésy-sur-Aix"],
	["73137", "Jacob-Bellecombette"],
	["73151", "Porte-de-Savoie"],
	["73155", "Méry"],
	["73160", "Montagnole"],
	["73179", "La Motte-Servolex"],
	["73182", "Mouxy"],
	["73183", "Myans"],
	["73208", "Pugny-Chatenod"],
	["73213", "La Ravoire"],
	["73222", "Saint-Alban-Leysse"],
	["73225", "Saint-Baldoph"],
	["73228", "Saint-Cassin"],
	["73243", "Saint-Jean-d'Arvey"],
	["73249", "Saint-Jeoire-Prieuré"],
	["73288", "Sonnaz"],
	["73300", "Tresserve"],
	["73301", "Trévignin"],
	["73310", "Verel-Pragondran"],
	["73326", "Vimines"],
	["73328", "Viviers-du-Lac"],
	["73329", "Voglans"],
	["74005", "Allinges"],
	["74007", "Amancy"],
	["74008", "Ambilly"],
	["74010", "Annecy"],
	["74012", "Annemasse"],
	["74013", "Anthy-sur-Léman"],
	["74016", "Archamps"],
	["74018", "Arenthon"],
	["74019", "Argonay"],
	["74020", "Armoy"],
	["74021", "Arthaz-Pont-Notre-Dame"],
	["74024", "Ayse"],
	["74026", "La Balme-de-Sillingy"],
	["74037", "Boëge"],
	["74040", "Bonne"],
	["74042", "Bonneville"],
	["74044", "Bossey"],
	["74064", "Châtillon-sur-Cluses"],
	["74067", "Chavanod"],
	["74072", "Chevaline"],
	["74081", "Cluses"],
	["74082", "Collonges-sous-Salève"],
	["74087", "Contamine-sur-Arve"],
	["74090", "Cornier"],
	["74094", "Cranves-Sales"],
	["74104", "Doussard"],
	["74108", "Duingt"],
	["74112", "Epagny Metz-Tessy"],
	["74116", "Etaux"],
	["74118", "Étrembières"],
	["74119", "Évian-les-Bains"],
	["74121", "Excenevex"],
	["74122", "Faucigny"],
	["74128", "Fillinges"],
	["74133", "Gaillard"],
	["74147", "Lathuile"],
	["74152", "Lovagny"],
	["74153", "Lucinges"],
	["74154", "Lugrin"],
	["74162", "Marcellaz"],
	["74163", "Margencel"],
	["74164", "Marignier"],
	["74166", "Marin"],
	["74169", "Marnaz"],
	["74172", "Maxilly-sur-Léman"],
	["74185", "Monnetier-Mornex"],
	["74197", "Nangy"],
	["74200", "Neuvecelle"],
	["74201", "Neydens"],
	["74209", "Peillonnex"],
	["74211", "Pers-Jussy"],
	["74213", "Poisy"],
	["74218", "Publier"],
	["74220", "Reignier-Ésery"],
	["74224", "La Roche-sur-Foron"],
	["74226", "Saint-André-de-Boëge"],
	["74240", "Saint-Jean-de-Tholome"],
	["74242", "Saint-Jorioz"],
	["74243", "Saint-Julien-en-Genevois"],
	["74244", "Saint-Laurent"],
	["74250", "Saint-Pierre-en-Faucigny"],
	["74253", "Saint-Sixt"],
	["74262", "Scientrier"],
	["74263", "Sciez"],
	["74264", "Scionzier"],
	["74267", "Sevrier"],
	["74272", "Sillingy"],
	["74278", "Thyez"],
	["74281", "Thonon-les-Bains"],
	["74298", "Vétraz-Monthoux"],
	["74304", "Ville-en-Sallaz"],
	["74305", "Ville-la-Grand"],
	["74311", "Viuz-en-Sallaz"],
	["74312", "Vougy"],
	["75056", "Paris"],
	["77018", "Bailly-Romainvilliers"],
	["77039", "Boissise-la-Bertrand"],
	["77040", "Boissise-le-Roi"],
	["77055", "Brou-sur-Chantereine"],
	["77058", "Bussy-Saint-Georges"],
	["77059", "Bussy-Saint-Martin"],
	["77062", "Carnetin"],
	["77067", "Cesson"],
	["77075", "Chalifert"],
	["77083", "Champs-sur-Marne"],
	["77085", "Chanteloup-en-Brie"],
	["77108", "Chelles"],
	["77111", "Chessy"],
	["77121", "Collégien"],
	["77122", "Combs-la-Ville"],
	["77124", "Conches-sur-Gondoire"],
	["77125", "Condé-Sainte-Libiaire"],
	["77128", "Couilly-Pont-aux-Dames"],
	["77132", "Coupvray"],
	["77139", "Courtry"],
	["77141", "Coutevroult"],
	["77142", "Crécy-la-Chapelle"],
	["77143", "Crégy-lès-Meaux"],
	["77146", "Croissy-Beaubourg"],
	["77152", "Dammarie-les-Lys"],
	["77155", "Dampmart"],
	["77169", "Émerainville"],
	["77171", "Esbly"],
	["77181", "Ferrières-en-Brie"],
	["77209", "Gouvernes"],
	["77221", "Guermantes"],
	["77232", "Isles-lès-Villenoy"],
	["77243", "Lagny-sur-Marne"],
	["77249", "Lésigny"],
	["77251", "Lieusaint"],
	["77255", "Livry-sur-Seine"],
	["77258", "Lognes"],
	["77268", "Magny-le-Hongre"],
	["77276", "Mareuil-lès-Meaux"],
	["77284", "Meaux"],
	["77285", "Le Mée-sur-Seine"],
	["77288", "Melun"],
	["77291", "Le Mesnil-Amelot"],
	["77294", "Mitry-Mory"],
	["77296", "Moissy-Cramayel"],
	["77307", "Montévrain"],
	["77315", "Montry"],
	["77326", "Nandy"],
	["77330", "Nanteuil-lès-Meaux"],
	["77337", "Noisiel"],
	["77350", "Ozoir-la-Ferrière"],
	["77369", "Poincy"],
	["77372", "Pomponne"],
	["77373", "Pontault-Combault"],
	["77378", "Pringy"],
	["77382", "Quincy-Voisins"],
	["77389", "La Rochette"],
	["77390", "Roissy-en-Brie"],
	["77394", "Rubelles"],
	["77407", "Saint-Fargeau-Ponthierry"],
	["77413", "Saint-Germain-sur-Morin"],
	["77438", "Saint-Thibault-des-Vignes"],
	["77445", "Savigny-le-Temple"],
	["77449", "Serris"],
	["77450", "Servon"],
	["77464", "Thorigny-sur-Marne"],
	["77468", "Torcy"],
	["77475", "Trilport"],
	["77479", "Vaires-sur-Marne"],
	["77487", "Vaux-le-Pénil"],
	["77495", "Vert-Saint-Denis"],
	["77513", "Villenoy"],
	["77514", "Villeparisis"],
	["77521", "Villiers-sur-Morin"],
	["77529", "Voulangis"],
	["78005", "Achères"],
	["78015", "Andrésy"],
	["78031", "Auffreville-Brasseuil"],
	["78050", "Bazoches-sur-Guyonne"],
	["78073", "Bois-d'Arcy"],
	["78092", "Bougival"],
	["78117", "Buc"],
	["78118", "Buchelay"],
	["78123", "Carrières-sous-Poissy"],
	["78124", "Carrières-sur-Seine"],
	["78126", "La Celle-Saint-Cloud"],
	["78133", "Chambourcy"],
	["78138", "Chanteloup-les-Vignes"],
	["78140", "Chapet"],
	["78146", "Chatou"],
	["78158", "Le Chesnay-Rocquencourt"],
	["78160", "Chevreuse"],
	["78165", "Les Clayes-sous-Bois"],
	["78168", "Coignières"],
	["78172", "Conflans-Sainte-Honorine"],
	["78190", "Croissy-sur-Seine"],
	["78208", "Élancourt"],
	["78224", "L'Étang-la-Ville"],
	["78227", "Évecquemont"],
	["78239", "Follainville-Dennemont"],
	["78242", "Fontenay-le-Fleury"],
	["78261", "Gaillon-sur-Montcient"],
	["78267", "Gargenville"],
	["78297", "Guyancourt"],
	["78299", "Hardricourt"],
	["78311", "Houilles"],
	["78314", "Issou"],
	["78321", "Jouars-Pontchartrain"],
	["78322", "Jouy-en-Josas"],
	["78327", "Juziers"],
	["78335", "Limay"],
	["78343", "Les Loges-en-Josas"],
	["78350", "Louveciennes"],
	["78354", "Magnanville"],
	["78356", "Magny-les-Hameaux"],
	["78358", "Maisons-Laffitte"],
	["78361", "Mantes-la-Jolie"],
	["78362", "Mantes-la-Ville"],
	["78367", "Mareil-Marly"],
	["78372", "Marly-le-Roi"],
	["78382", "Maurecourt"],
	["78383", "Maurepas"],
	["78384", "Médan"],
	["78396", "Le Mesnil-le-Roi"],
	["78397", "Le Mesnil-Saint-Denis"],
	["78401", "Meulan-en-Yvelines"],
	["78403", "Mézy-sur-Seine"],
	["78418", "Montesson"],
	["78423", "Montigny-le-Bretonneux"],
	["78440", "Les Mureaux"],
	["78442", "Neauphle-le-Château"],
	["78443", "Neauphle-le-Vieux"],
	["78466", "Orgeval"],
	["78481", "Le Pecq"],
	["78490", "Plaisir"],
	["78498", "Poissy"],
	["78501", "Porcheville"],
	["78502", "Le Port-Marly"],
	["78545", "Saint-Cyr-l'École"],
	["78550", "Saint-Germain-de-la-Grange"],
	["78551", "Saint-Germain-en-Laye"],
	["78575", "Saint-Rémy-lès-Chevreuse"],
	["78576", "Saint-Rémy-l'Honoré"],
	["78586", "Sartrouville"],
	["78609", "Tessancourt-sur-Aubette"],
	["78621", "Trappes"],
	["78623", "Le Tremblay-sur-Mauldre"],
	["78624", "Triel-sur-Seine"],
	["78638", "Vaux-sur-Seine"],
	["78640", "Vélizy-Villacoublay"],
	["78642", "Verneuil-sur-Seine"],
	["78643", "Vernouillet"],
	["78644", "La Verrière"],
	["78646", "Versailles"],
	["78647", "Vert"],
	["78650", "Le Vésinet"],
	["78672", "Villennes-sur-Seine"],
	["78674", "Villepreux"],
	["78683", "Villiers-Saint-Frédéric"],
	["78686", "Viroflay"],
	["78688", "Voisins-le-Bretonneux"],
	["82075", "Grisolles"],
	["82142", "Pompignan"],
	["83004", "Les Arcs"],
	["83009", "Bandol"],
	["83016", "Le Beausset"],
	["83017", "Belgentier"],
	["83027", "La Cadière-d'Azur"],
	["83034", "Carqueiranne"],
	["83035", "Le Castellet"],
	["83047", "La Crau"],
	["83049", "Cuers"],
	["83050", "Draguignan"],
	["83053", "Évenos"],
	["83054", "La Farlède"],
	["83058", "Flayosc"],
	["83061", "Fréjus"],
	["83062", "La Garde"],
	["83069", "Hyères"],
	["83085", "La Motte"],
	["83086", "Le Muy"],
	["83090", "Ollioules"],
	["83098", "Le Pradet"],
	["83099", "Puget-sur-Argens"],
	["83103", "Le Revest-les-Eaux"],
	["83112", "Saint-Cyr-sur-Mer"],
	["83118", "Saint-Raphaël"],
	["83120", "Saint-Zacharie"],
	["83123", "Sanary-sur-Mer"],
	["83126", "La Seyne-sur-Mer"],
	["83129", "Six-Fours-les-Plages"],
	["83130", "Solliès-Pont"],
	["83131", "Solliès-Toucas"],
	["83132", "Solliès-Ville"],
	["83137", "Toulon"],
	["83141", "Trans-en-Provence"],
	["83144", "La Valette-du-Var"],
	["83153", "Saint-Mandrier-sur-Mer"],
	["84001", "Althen-des-Paluds"],
	["84004", "Aubignan"],
	["84007", "Avignon"],
	["84012", "Beaumes-de-Venise"],
	["84013", "Beaumettes"],
	["84016", "Bédarrides"],
	["84025", "Cabrières-d'Avignon"],
	["84027", "Caderousse"],
	["84030", "Caromb"],
	["84031", "Carpentras"],
	["84035", "Cavaillon"],
	["84036", "Châteauneuf-de-Gadagne"],
	["84038", "Cheval-Blanc"],
	["84039", "Courthézon"],
	["84043", "Entraigues-sur-la-Sorgue"],
	["84050", "Gordes"],
	["84051", "Goult"],
	["84054", "L'Isle-sur-la-Sorgue"],
	["84055", "Jonquerettes"],
	["84056", "Jonquières"],
	["84062", "Lagnes"],
	["84067", "Loriol-du-Comtat"],
	["84071", "Maubec"],
	["84072", "Mazan"],
	["84073", "Ménerbes"],
	["84077", "Modène"],
	["84080", "Monteux"],
	["84081", "Morières-lès-Avignon"],
	["84086", "Oppède"],
	["84087", "Orange"],
	["84088", "Pernes-les-Fontaines"],
	["84092", "Le Pontet"],
	["84099", "Robion"],
	["84108", "Saint-Didier"],
	["84114", "Saint-Pantaléon"],
	["84119", "Saint-Saturnin-lès-Avignon"],
	["84122", "Sarrians"],
	["84124", "Saumane-de-Vaucluse"],
	["84129", "Sorgues"],
	["84131", "Taillades"],
	["84132", "Le Thor"],
	["84139", "Fontaine-de-Vaucluse"],
	["84141", "Vedène"],
	["84142", "Velleron"],
	["91021", "Arpajon"],
	["91027", "Athis-Mons"],
	["91044", "Ballainvilliers"],
	["91064", "Bièvres"],
	["91086", "Bondoufle"],
	["91097", "Boussy-Saint-Antoine"],
	["91103", "Brétigny-sur-Orge"],
	["91105", "Breuillet"],
	["91106", "Breux-Jouy"],
	["91114", "Brunoy"],
	["91115", "Bruyères-le-Châtel"],
	["91122", "Bures-sur-Yvette"],
	["91136", "Champlan"],
	["91161", "Chilly-Mazarin"],
	["91174", "Corbeil-Essonnes"],
	["91179", "Le Coudray-Montceaux"],
	["91191", "Crosne"],
	["91201", "Draveil"],
	["91204", "Écharcon"],
	["91207", "Égly"],
	["91215", "Épinay-sous-Sénart"],
	["91216", "Épinay-sur-Orge"],
	["91225", "Étiolles"],
	["91228", "Évry-Courcouronnes"],
	["91235", "Fleury-Mérogis"],
	["91244", "Fontenay-le-Vicomte"],
	["91272", "Gif-sur-Yvette"],
	["91275", "Gometz-le-Châtel"],
	["91286", "Grigny"],
	["91312", "Igny"],
	["91326", "Juvisy-sur-Orge"],
	["91333", "Leuville-sur-Orge"],
	["91339", "Linas"],
	["91340", "Lisses"],
	["91345", "Longjumeau"],
	["91347", "Longpont-sur-Orge"],
	["91363", "Marcoussis"],
	["91377", "Massy"],
	["91386", "Mennecy"],
	["91421", "Montgeron"],
	["91425", "Montlhéry"],
	["91432", "Morangis"],
	["91434", "Morsang-sur-Orge"],
	["91435", "Morsang-sur-Seine"],
	["91457", "La Norville"],
	["91458", "Nozay"],
	["91461", "Ollainville"],
	["91468", "Ormoy"],
	["91471", "Orsay"],
	["91477", "Palaiseau"],
	["91479", "Paray-Vieille-Poste"],
	["91494", "Le Plessis-Pâté"],
	["91514", "Quincy-sous-Sénart"],
	["91521", "Ris-Orangis"],
	["91534", "Saclay"],
	["91538", "Saint-Aubin"],
	["91549", "Sainte-Geneviève-des-Bois"],
	["91552", "Saint-Germain-lès-Arpajon"],
	["91553", "Saint-Germain-lès-Corbeil"],
	["91570", "Saint-Michel-sur-Orge"],
	["91573", "Saint-Pierre-du-Perray"],
	["91577", "Saintry-sur-Seine"],
	["91581", "Saint-Yon"],
	["91587", "Saulx-les-Chartreux"],
	["91589", "Savigny-sur-Orge"],
	["91600", "Soisy-sur-Seine"],
	["91631", "Varennes-Jarcy"],
	["91635", "Vauhallan"],
	["91645", "Verrières-le-Buisson"],
	["91657", "Vigneux-sur-Seine"],
	["91659", "Villabé"],
	["91661", "Villebon-sur-Yvette"],
	["91665", "La Ville-du-Bois"],
	["91666", "Villejust"],
	["91667", "Villemoisson-sur-Orge"],
	["91679", "Villiers-le-Bâcle"],
	["91685", "Villiers-sur-Orge"],
	["91687", "Viry-Châtillon"],
	["91689", "Wissous"],
	["91691", "Yerres"],
	["91692", "Les Ulis"],
	["92002", "Antony"],
	["92004", "Asnières-sur-Seine"],
	["92007", "Bagneux"],
	["92009", "Bois-Colombes"],
	["92012", "Boulogne-Billancourt"],
	["92014", "Bourg-la-Reine"],
	["92019", "Châtenay-Malabry"],
	["92020", "Châtillon"],
	["92022", "Chaville"],
	["92023", "Clamart"],
	["92024", "Clichy"],
	["92025", "Colombes"],
	["92026", "Courbevoie"],
	["92032", "Fontenay-aux-Roses"],
	["92033", "Garches"],
	["92035", "La Garenne-Colombes"],
	["92036", "Gennevilliers"],
	["92040", "Issy-les-Moulineaux"],
	["92044", "Levallois-Perret"],
	["92046", "Malakoff"],
	["92047", "Marnes-la-Coquette"],
	["92048", "Meudon"],
	["92049", "Montrouge"],
	["92050", "Nanterre"],
	["92051", "Neuilly-sur-Seine"],
	["92060", "Le Plessis-Robinson"],
	["92062", "Puteaux"],
	["92063", "Rueil-Malmaison"],
	["92064", "Saint-Cloud"],
	["92071", "Sceaux"],
	["92072", "Sèvres"],
	["92073", "Suresnes"],
	["92075", "Vanves"],
	["92076", "Vaucresson"],
	["92077", "Ville-d'Avray"],
	["92078", "Villeneuve-la-Garenne"],
	["93001", "Aubervilliers"],
	["93005", "Aulnay-sous-Bois"],
	["93006", "Bagnolet"],
	["93007", "Le Blanc-Mesnil"],
	["93008", "Bobigny"],
	["93010", "Bondy"],
	["93013", "Le Bourget"],
	["93014", "Clichy-sous-Bois"],
	["93015", "Coubron"],
	["93027", "La Courneuve"],
	["93029", "Drancy"],
	["93030", "Dugny"],
	["93031", "Épinay-sur-Seine"],
	["93032", "Gagny"],
	["93033", "Gournay-sur-Marne"],
	["93039", "L'Île-Saint-Denis"],
	["93045", "Les Lilas"],
	["93046", "Livry-Gargan"],
	["93047", "Montfermeil"],
	["93048", "Montreuil"],
	["93049", "Neuilly-Plaisance"],
	["93050", "Neuilly-sur-Marne"],
	["93051", "Noisy-le-Grand"],
	["93053", "Noisy-le-Sec"],
	["93055", "Pantin"],
	["93057", "Les Pavillons-sous-Bois"],
	["93059", "Pierrefitte-sur-Seine"],
	["93061", "Le Pré-Saint-Gervais"],
	["93062", "Le Raincy"],
	["93063", "Romainville"],
	["93064", "Rosny-sous-Bois"],
	["93066", "Saint-Denis"],
	["93070", "Saint-Ouen-sur-Seine"],
	["93071", "Sevran"],
	["93072", "Stains"],
	["93073", "Tremblay-en-France"],
	["93074", "Vaujours"],
	["93077", "Villemomble"],
	["93078", "Villepinte"],
	["93079", "Villetaneuse"],
	["94001", "Ablon-sur-Seine"],
	["94002", "Alfortville"],
	["94003", "Arcueil"],
	["94004", "Boissy-Saint-Léger"],
	["94011", "Bonneuil-sur-Marne"],
	["94015", "Bry-sur-Marne"],
	["94016", "Cachan"],
	["94017", "Champigny-sur-Marne"],
	["94018", "Charenton-le-Pont"],
	["94019", "Chennevières-sur-Marne"],
	["94021", "Chevilly-Larue"],
	["94022", "Choisy-le-Roi"],
	["94028", "Créteil"],
	["94033", "Fontenay-sous-Bois"],
	["94034", "Fresnes"],
	["94037", "Gentilly"],
	["94038", "L'Haÿ-les-Roses"],
	["94041", "Ivry-sur-Seine"],
	["94042", "Joinville-le-Pont"],
	["94043", "Le Kremlin-Bicêtre"],
	["94044", "Limeil-Brévannes"],
	["94046", "Maisons-Alfort"],
	["94047", "Mandres-les-Roses"],
	["94048", "Marolles-en-Brie"],
	["94052", "Nogent-sur-Marne"],
	["94053", "Noiseau"],
	["94054", "Orly"],
	["94055", "Ormesson-sur-Marne"],
	["94056", "Périgny"],
	["94058", "Le Perreux-sur-Marne"],
	["94059", "Le Plessis-Trévise"],
	["94060", "La Queue-en-Brie"],
	["94065", "Rungis"],
	["94067", "Saint-Mandé"],
	["94068", "Saint-Maur-des-Fossés"],
	["94069", "Saint-Maurice"],
	["94070", "Santeny"],
	["94071", "Sucy-en-Brie"],
	["94073", "Thiais"],
	["94074", "Valenton"],
	["94075", "Villecresnes"],
	["94076", "Villejuif"],
	["94077", "Villeneuve-le-Roi"],
	["94078", "Villeneuve-Saint-Georges"],
	["94079", "Villiers-sur-Marne"],
	["94080", "Vincennes"],
	["94081", "Vitry-sur-Seine"],
	["95014", "Andilly"],
	["95018", "Argenteuil"],
	["95019", "Arnouville"],
	["95039", "Auvers-sur-Oise"],
	["95051", "Beauchamp"],
	["95060", "Bessancourt"],
	["95063", "Bezons"],
	["95088", "Bonneuil-en-France"],
	["95091", "Bouffémont"],
	["95120", "Butry-sur-Oise"],
	["95127", "Cergy"],
	["95134", "Champagne-sur-Oise"],
	["95176", "Cormeilles-en-Parisis"],
	["95183", "Courdimanche"],
	["95197", "Deuil-la-Barre"],
	["95199", "Domont"],
	["95203", "Eaubonne"],
	["95205", "Écouen"],
	["95210", "Enghien-les-Bains"],
	["95211", "Ennery"],
	["95212", "Épiais-lès-Louvres"],
	["95218", "Éragny"],
	["95219", "Ermont"],
	["95229", "Ézanville"],
	["95252", "Franconville"],
	["95256", "Frépillon"],
	["95257", "La Frette-sur-Seine"],
	["95268", "Garges-lès-Gonesse"],
	["95277", "Gonesse"],
	["95280", "Goussainville"],
	["95288", "Groslay"],
	["95306", "Herblay-sur-Seine"],
	["95313", "L'Isle-Adam"],
	["95323", "Jouy-le-Moutier"],
	["95369", "Margency"],
	["95392", "Mériel"],
	["95394", "Méry-sur-Oise"],
	["95424", "Montigny-lès-Cormeilles"],
	["95426", "Montlignon"],
	["95427", "Montmagny"],
	["95428", "Montmorency"],
	["95446", "Nesles-la-Vallée"],
	["95450", "Neuville-sur-Oise"],
	["95476", "Osny"],
	["95480", "Parmain"],
	["95488", "Pierrelaye"],
	["95489", "Piscop"],
	["95491", "Le Plessis-Bouchard"],
	["95500", "Pontoise"],
	["95510", "Puiseux-Pontoise"],
	["95527", "Roissy-en-France"],
	["95539", "Saint-Brice-sous-Forêt"],
	["95555", "Saint-Gratien"],
	["95563", "Saint-Leu-la-Forêt"],
	["95572", "Saint-Ouen-l'Aumône"],
	["95574", "Saint-Prix"],
	["95582", "Sannois"],
	["95585", "Sarcelles"],
	["95598", "Soisy-sous-Montmorency"],
	["95607", "Taverny"],
	["95612", "Le Thillay"],
	["95628", "Valmondois"],
	["95633", "Vaudherland"],
	["95637", "Vauréal"],
	["95678", "Villiers-Adam"],
	["95680", "Villiers-le-Bel"],
	["97101", "Les Abymes"],
	["97103", "Baie-Mahault"],
	["97113", "Le Gosier"],
	["97115", "Lamentin"],
	["97116", "Morne-à-l'Eau"],
	["97117", "Le Moule"],
	["97118", "Petit-Bourg"],
	["97119", "Petit-Canal"],
	["97120", "Pointe-à-Pitre"],
	["97125", "Saint-François"],
	["97128", "Sainte-Anne"],
	["97205", "Case-Pilote"],
	["97207", "Ducos"],
	["97209", "Fort-de-France"],
	["97210", "Le François"],
	["97212", "Gros-Morne"],
	["97217", "Le Marin"],
	["97220", "Rivière-Pilote"],
	["97221", "Rivière-Salée"],
	["97222", "Le Robert"],
	["97223", "Saint-Esprit"],
	["97224", "Saint-Joseph"],
	["97226", "Sainte-Anne"],
	["97227", "Sainte-Luce"],
	["97229", "Schœlcher"],
	["97232", "Le Vauclin"],
	["97302", "Cayenne"],
	["97307", "Matoury"],
	["97309", "Remire-Montjoly"],
	["97403", "Entre-Deux"],
	["97407", "Le Port"],
	["97408", "La Possession"],
	["97411", "Saint-Denis"],
	["97414", "Saint-Louis"],
	["97415", "Saint-Paul"],
	["97416", "Saint-Pierre"],
	["97418", "Sainte-Marie"],
	["97422", "Le Tampon"]
];
// src/lib/encadrement/donnees/bordeaux.json
var bordeaux_default = {
	id: "bordeaux",
	nom: "Bordeaux",
	arrete: {
		"numero": "Arrêté préfectoral du 6 juillet 2026",
		"signeLe": "2026-07-06",
		"valideDu": "2026-07-15",
		"valideJusquau": "2026-11-24",
		"url": "https://www.gironde.gouv.fr/contenu/telechargement/87471/658140/file/arrete_prefectoral_encadrement%20loyers_Bordeaux_2026-07-06_sign%C3%A9.pdf",
		"page": "https://www.gironde.gouv.fr/Actions-de-l-Etat/Amenagement-du-territoire-construction-logement/Habitat-logement/Encadrement-des-loyers-a-Bordeaux/Dispositif-d-encadrement-des-loyers"
	},
	genereLe: "2026-11-12",
	communes: [{
		"insee": "33063",
		"nom": "Bordeaux",
		"secteurs": [
			"1",
			"2",
			"3",
			"4"
		],
		"couverture": "totale"
	}],
	zonage: {
		"maille": "secteur",
		"resolution": "4 zones délimitées par les cartes des annexes 3 et 4 de l'arrêté. La couche open data des secteurs date de 2022 : la recouper avec les annexes 2026 avant usage.",
		"geodonnees": "https://www.data.gouv.fr/datasets/encadrement-des-loyers-sur-bordeaux-secteurs-geographiques"
	},
	donnees: {
		"epoques": [
			{
				"cle": "avant-1946",
				"libelle": "avant 1946",
				"de": null,
				"a": 1945
			},
			{
				"cle": "1946-1970",
				"libelle": "1946-1970",
				"de": 1946,
				"a": 1970
			},
			{
				"cle": "1971-1990",
				"libelle": "1971-1990",
				"de": 1971,
				"a": 1990
			},
			{
				"cle": "apres-1990",
				"libelle": "après 1990",
				"de": 1991,
				"a": null
			}
		],
		"source": {
			"url": "https://www.gironde.gouv.fr/contenu/telechargement/87475/658160/file/Tableaux_loyers_reference_Bordeaux_Arrete_2026-07-06.xlsx",
			"methode": "Tableaux XLSX publiés avec l'arrêté par la préfecture (annexes 1 et 2), relus contre le PDF signé.",
			"recupereLe": "2026-11-12"
		},
		"lignes": [
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 1,
				"epoque": "avant-1946",
				"vide": [
					19.2,
					23,
					13.4
				],
				"majorationMeuble": 2.9,
				"meuble": [
					22.1,
					26.5,
					15.5
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 1,
				"epoque": "1946-1970",
				"vide": [
					18,
					21.6,
					12.6
				],
				"majorationMeuble": 2.7,
				"meuble": [
					20.7,
					24.8,
					14.5
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 1,
				"epoque": "1971-1990",
				"vide": [
					18.2,
					21.8,
					12.7
				],
				"majorationMeuble": 2.7,
				"meuble": [
					20.9,
					25.1,
					14.6
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 1,
				"epoque": "apres-1990",
				"vide": [
					19.9,
					23.9,
					13.9
				],
				"majorationMeuble": 3,
				"meuble": [
					22.9,
					27.5,
					16
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 2,
				"epoque": "avant-1946",
				"vide": [
					15.7,
					18.8,
					11
				],
				"majorationMeuble": 2.4,
				"meuble": [
					18.1,
					21.7,
					12.7
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 2,
				"epoque": "1946-1970",
				"vide": [
					14.3,
					17.2,
					10
				],
				"majorationMeuble": 2.1,
				"meuble": [
					16.4,
					19.7,
					11.5
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 2,
				"epoque": "1971-1990",
				"vide": [
					14.7,
					17.6,
					10.3
				],
				"majorationMeuble": 2.2,
				"meuble": [
					16.9,
					20.3,
					11.8
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 2,
				"epoque": "apres-1990",
				"vide": [
					14.4,
					17.3,
					10.1
				],
				"majorationMeuble": 2.2,
				"meuble": [
					16.6,
					19.9,
					11.6
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 3,
				"epoque": "avant-1946",
				"vide": [
					12.9,
					15.5,
					9
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.8,
					17.8,
					10.4
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 3,
				"epoque": "1946-1970",
				"vide": [
					12,
					14.4,
					8.4
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.8,
					16.6,
					9.7
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 3,
				"epoque": "1971-1990",
				"vide": [
					12.4,
					14.9,
					8.7
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.3,
					17.2,
					10
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 3,
				"epoque": "apres-1990",
				"vide": [
					12.5,
					15,
					8.8
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.4,
					17.3,
					10.1
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 4,
				"epoque": "avant-1946",
				"vide": [
					12.3,
					14.8,
					8.6
				],
				"majorationMeuble": 1.8,
				"meuble": [
					14.1,
					16.9,
					9.9
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 4,
				"epoque": "1946-1970",
				"vide": [
					11.1,
					13.3,
					7.8
				],
				"majorationMeuble": 1.7,
				"meuble": [
					12.8,
					15.4,
					9
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 4,
				"epoque": "1971-1990",
				"vide": [
					11.3,
					13.6,
					7.9
				],
				"majorationMeuble": 1.7,
				"meuble": [
					13,
					15.6,
					9.1
				]
			},
			{
				"secteur": "1",
				"type": "appartement",
				"pieces": 4,
				"epoque": "apres-1990",
				"vide": [
					11.9,
					14.3,
					8.3
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.7,
					16.4,
					9.6
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 1,
				"epoque": "avant-1946",
				"vide": [
					18.1,
					21.7,
					12.7
				],
				"majorationMeuble": 2.7,
				"meuble": [
					20.8,
					25,
					14.6
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 1,
				"epoque": "1946-1970",
				"vide": [
					17.5,
					21,
					12.3
				],
				"majorationMeuble": 2.6,
				"meuble": [
					20.1,
					24.1,
					14.1
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 1,
				"epoque": "1971-1990",
				"vide": [
					17.8,
					21.4,
					12.5
				],
				"majorationMeuble": 2.7,
				"meuble": [
					20.5,
					24.6,
					14.4
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 1,
				"epoque": "apres-1990",
				"vide": [
					18.2,
					21.8,
					12.7
				],
				"majorationMeuble": 2.7,
				"meuble": [
					20.9,
					25.1,
					14.6
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 2,
				"epoque": "avant-1946",
				"vide": [
					14.6,
					17.5,
					10.2
				],
				"majorationMeuble": 2.2,
				"meuble": [
					16.8,
					20.2,
					11.8
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 2,
				"epoque": "1946-1970",
				"vide": [
					12.5,
					15,
					8.8
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.4,
					17.3,
					10.1
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 2,
				"epoque": "1971-1990",
				"vide": [
					14.2,
					17,
					9.9
				],
				"majorationMeuble": 2.1,
				"meuble": [
					16.3,
					19.6,
					11.4
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 2,
				"epoque": "apres-1990",
				"vide": [
					13.8,
					16.6,
					9.7
				],
				"majorationMeuble": 2.1,
				"meuble": [
					15.9,
					19.1,
					11.1
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 3,
				"epoque": "avant-1946",
				"vide": [
					12.5,
					15,
					8.8
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.4,
					17.3,
					10.1
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 3,
				"epoque": "1946-1970",
				"vide": [
					11.3,
					13.6,
					7.9
				],
				"majorationMeuble": 1.7,
				"meuble": [
					13,
					15.6,
					9.1
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 3,
				"epoque": "1971-1990",
				"vide": [
					11.7,
					14,
					8.2
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.5,
					16.2,
					9.5
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 3,
				"epoque": "apres-1990",
				"vide": [
					12.2,
					14.6,
					8.5
				],
				"majorationMeuble": 1.8,
				"meuble": [
					14,
					16.8,
					9.8
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 4,
				"epoque": "avant-1946",
				"vide": [
					11.4,
					13.7,
					8
				],
				"majorationMeuble": 1.7,
				"meuble": [
					13.1,
					15.7,
					9.2
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 4,
				"epoque": "1946-1970",
				"vide": [
					11,
					13.2,
					7.7
				],
				"majorationMeuble": 1.7,
				"meuble": [
					12.7,
					15.2,
					8.9
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 4,
				"epoque": "1971-1990",
				"vide": [
					11.1,
					13.3,
					7.8
				],
				"majorationMeuble": 1.7,
				"meuble": [
					12.8,
					15.4,
					9
				]
			},
			{
				"secteur": "2",
				"type": "appartement",
				"pieces": 4,
				"epoque": "apres-1990",
				"vide": [
					11.3,
					13.6,
					7.9
				],
				"majorationMeuble": 1.7,
				"meuble": [
					13,
					15.6,
					9.1
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 1,
				"epoque": "avant-1946",
				"vide": [
					18,
					21.6,
					12.6
				],
				"majorationMeuble": 2.7,
				"meuble": [
					20.7,
					24.8,
					14.5
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 1,
				"epoque": "1946-1970",
				"vide": [
					16.5,
					19.8,
					11.6
				],
				"majorationMeuble": 2.5,
				"meuble": [
					19,
					22.8,
					13.3
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 1,
				"epoque": "1971-1990",
				"vide": [
					17.4,
					20.9,
					12.2
				],
				"majorationMeuble": 2.6,
				"meuble": [
					20,
					24,
					14
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 1,
				"epoque": "apres-1990",
				"vide": [
					16.8,
					20.2,
					11.8
				],
				"majorationMeuble": 2.5,
				"meuble": [
					19.3,
					23.2,
					13.5
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 2,
				"epoque": "avant-1946",
				"vide": [
					14.1,
					16.9,
					9.9
				],
				"majorationMeuble": 2.1,
				"meuble": [
					16.2,
					19.4,
					11.3
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 2,
				"epoque": "1946-1970",
				"vide": [
					12.3,
					14.8,
					8.6
				],
				"majorationMeuble": 1.8,
				"meuble": [
					14.1,
					16.9,
					9.9
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 2,
				"epoque": "1971-1990",
				"vide": [
					12.6,
					15.1,
					8.8
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.5,
					17.4,
					10.2
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 2,
				"epoque": "apres-1990",
				"vide": [
					13.2,
					15.8,
					9.2
				],
				"majorationMeuble": 2,
				"meuble": [
					15.2,
					18.2,
					10.6
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 3,
				"epoque": "avant-1946",
				"vide": [
					11.7,
					14,
					8.2
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.5,
					16.2,
					9.5
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 3,
				"epoque": "1946-1970",
				"vide": [
					10.9,
					13.1,
					7.6
				],
				"majorationMeuble": 1.6,
				"meuble": [
					12.5,
					15,
					8.8
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 3,
				"epoque": "1971-1990",
				"vide": [
					11,
					13.2,
					7.7
				],
				"majorationMeuble": 1.7,
				"meuble": [
					12.7,
					15.2,
					8.9
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 3,
				"epoque": "apres-1990",
				"vide": [
					11.6,
					13.9,
					8.1
				],
				"majorationMeuble": 1.7,
				"meuble": [
					13.3,
					16,
					9.3
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 4,
				"epoque": "avant-1946",
				"vide": [
					10.8,
					13,
					7.6
				],
				"majorationMeuble": 1.6,
				"meuble": [
					12.4,
					14.9,
					8.7
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 4,
				"epoque": "1946-1970",
				"vide": [
					10.3,
					12.4,
					7.2
				],
				"majorationMeuble": 1.5,
				"meuble": [
					11.8,
					14.2,
					8.3
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 4,
				"epoque": "1971-1990",
				"vide": [
					10.8,
					13,
					7.6
				],
				"majorationMeuble": 1.6,
				"meuble": [
					12.4,
					14.9,
					8.7
				]
			},
			{
				"secteur": "3",
				"type": "appartement",
				"pieces": 4,
				"epoque": "apres-1990",
				"vide": [
					11,
					13.2,
					7.7
				],
				"majorationMeuble": 1.7,
				"meuble": [
					12.7,
					15.2,
					8.9
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 1,
				"epoque": "avant-1946",
				"vide": [
					15.8,
					19,
					11.1
				],
				"majorationMeuble": 2.4,
				"meuble": [
					18.2,
					21.8,
					12.7
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 1,
				"epoque": "1946-1970",
				"vide": [
					14.6,
					17.5,
					10.2
				],
				"majorationMeuble": 2.2,
				"meuble": [
					16.8,
					20.2,
					11.8
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 1,
				"epoque": "1971-1990",
				"vide": [
					15.8,
					19,
					11.1
				],
				"majorationMeuble": 2.4,
				"meuble": [
					18.2,
					21.8,
					12.7
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 1,
				"epoque": "apres-1990",
				"vide": [
					14.6,
					17.5,
					10.2
				],
				"majorationMeuble": 2.2,
				"meuble": [
					16.8,
					20.2,
					11.8
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 2,
				"epoque": "avant-1946",
				"vide": [
					12.7,
					15.2,
					8.9
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.6,
					17.5,
					10.2
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 2,
				"epoque": "1946-1970",
				"vide": [
					12.1,
					14.5,
					8.5
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.9,
					16.7,
					9.7
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 2,
				"epoque": "1971-1990",
				"vide": [
					12.1,
					14.5,
					8.5
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.9,
					16.7,
					9.7
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 2,
				"epoque": "apres-1990",
				"vide": [
					13,
					15.6,
					9.1
				],
				"majorationMeuble": 2,
				"meuble": [
					15,
					18,
					10.5
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 3,
				"epoque": "avant-1946",
				"vide": [
					11.1,
					13.3,
					7.8
				],
				"majorationMeuble": 1.7,
				"meuble": [
					12.8,
					15.4,
					9
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 3,
				"epoque": "1946-1970",
				"vide": [
					10.7,
					12.8,
					7.5
				],
				"majorationMeuble": 1.6,
				"meuble": [
					12.3,
					14.8,
					8.6
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 3,
				"epoque": "1971-1990",
				"vide": [
					11,
					13.2,
					7.7
				],
				"majorationMeuble": 1.7,
				"meuble": [
					12.7,
					15.2,
					8.9
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 3,
				"epoque": "apres-1990",
				"vide": [
					11.5,
					13.8,
					8.1
				],
				"majorationMeuble": 1.7,
				"meuble": [
					13.2,
					15.8,
					9.2
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 4,
				"epoque": "avant-1946",
				"vide": [
					10.8,
					13,
					7.6
				],
				"majorationMeuble": 1.6,
				"meuble": [
					12.4,
					14.9,
					8.7
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 4,
				"epoque": "1946-1970",
				"vide": [
					10.2,
					12.2,
					7.1
				],
				"majorationMeuble": 1.5,
				"meuble": [
					11.7,
					14,
					8.2
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 4,
				"epoque": "1971-1990",
				"vide": [
					10.7,
					12.8,
					7.5
				],
				"majorationMeuble": 1.6,
				"meuble": [
					12.3,
					14.8,
					8.6
				]
			},
			{
				"secteur": "4",
				"type": "appartement",
				"pieces": 4,
				"epoque": "apres-1990",
				"vide": [
					10.7,
					12.8,
					7.5
				],
				"majorationMeuble": 1.6,
				"meuble": [
					12.3,
					14.8,
					8.6
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 1,
				"epoque": "avant-1946",
				"vide": [
					21.1,
					25.3,
					14.8
				],
				"majorationMeuble": 3.2,
				"meuble": [
					24.3,
					29.2,
					17
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 1,
				"epoque": "1946-1970",
				"vide": [
					19.8,
					23.8,
					13.9
				],
				"majorationMeuble": 3,
				"meuble": [
					22.8,
					27.4,
					16
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 1,
				"epoque": "1971-1990",
				"vide": [
					20,
					24,
					14
				],
				"majorationMeuble": 3,
				"meuble": [
					23,
					27.6,
					16.1
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 1,
				"epoque": "apres-1990",
				"vide": [
					21.9,
					26.3,
					15.3
				],
				"majorationMeuble": 3.3,
				"meuble": [
					25.2,
					30.2,
					17.6
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 2,
				"epoque": "avant-1946",
				"vide": [
					17.3,
					20.8,
					12.1
				],
				"majorationMeuble": 2.6,
				"meuble": [
					19.9,
					23.9,
					13.9
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 2,
				"epoque": "1946-1970",
				"vide": [
					15.7,
					18.8,
					11
				],
				"majorationMeuble": 2.4,
				"meuble": [
					18.1,
					21.7,
					12.7
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 2,
				"epoque": "1971-1990",
				"vide": [
					16.2,
					19.4,
					11.3
				],
				"majorationMeuble": 2.4,
				"meuble": [
					18.6,
					22.3,
					13
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 2,
				"epoque": "apres-1990",
				"vide": [
					15.8,
					19,
					11.1
				],
				"majorationMeuble": 2.4,
				"meuble": [
					18.2,
					21.8,
					12.7
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 3,
				"epoque": "avant-1946",
				"vide": [
					14.2,
					17,
					9.9
				],
				"majorationMeuble": 2.1,
				"meuble": [
					16.3,
					19.6,
					11.4
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 3,
				"epoque": "1946-1970",
				"vide": [
					13.2,
					15.8,
					9.2
				],
				"majorationMeuble": 2,
				"meuble": [
					15.2,
					18.2,
					10.6
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 3,
				"epoque": "1971-1990",
				"vide": [
					13.6,
					16.3,
					9.5
				],
				"majorationMeuble": 2,
				"meuble": [
					15.6,
					18.7,
					10.9
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 3,
				"epoque": "apres-1990",
				"vide": [
					13.8,
					16.6,
					9.7
				],
				"majorationMeuble": 2.1,
				"meuble": [
					15.9,
					19.1,
					11.1
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 4,
				"epoque": "avant-1946",
				"vide": [
					13.5,
					16.2,
					9.5
				],
				"majorationMeuble": 2,
				"meuble": [
					15.5,
					18.6,
					10.9
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 4,
				"epoque": "1946-1970",
				"vide": [
					12.2,
					14.6,
					8.5
				],
				"majorationMeuble": 1.8,
				"meuble": [
					14,
					16.8,
					9.8
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 4,
				"epoque": "1971-1990",
				"vide": [
					12.4,
					14.9,
					8.7
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.3,
					17.2,
					10
				]
			},
			{
				"secteur": "1",
				"type": "maison",
				"pieces": 4,
				"epoque": "apres-1990",
				"vide": [
					13.1,
					15.7,
					9.2
				],
				"majorationMeuble": 2,
				"meuble": [
					15.1,
					18.1,
					10.6
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 1,
				"epoque": "avant-1946",
				"vide": [
					19.9,
					23.9,
					13.9
				],
				"majorationMeuble": 3,
				"meuble": [
					22.9,
					27.5,
					16
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 1,
				"epoque": "1946-1970",
				"vide": [
					19.3,
					23.2,
					13.5
				],
				"majorationMeuble": 2.9,
				"meuble": [
					22.2,
					26.6,
					15.5
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 1,
				"epoque": "1971-1990",
				"vide": [
					19.6,
					23.5,
					13.7
				],
				"majorationMeuble": 2.9,
				"meuble": [
					22.5,
					27,
					15.8
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 1,
				"epoque": "apres-1990",
				"vide": [
					20,
					24,
					14
				],
				"majorationMeuble": 3,
				"meuble": [
					23,
					27.6,
					16.1
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 2,
				"epoque": "avant-1946",
				"vide": [
					16.1,
					19.3,
					11.3
				],
				"majorationMeuble": 2.4,
				"meuble": [
					18.5,
					22.2,
					13
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 2,
				"epoque": "1946-1970",
				"vide": [
					13.8,
					16.6,
					9.7
				],
				"majorationMeuble": 2.1,
				"meuble": [
					15.9,
					19.1,
					11.1
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 2,
				"epoque": "1971-1990",
				"vide": [
					15.6,
					18.7,
					10.9
				],
				"majorationMeuble": 2.3,
				"meuble": [
					17.9,
					21.5,
					12.5
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 2,
				"epoque": "apres-1990",
				"vide": [
					15.2,
					18.2,
					10.6
				],
				"majorationMeuble": 2.3,
				"meuble": [
					17.5,
					21,
					12.3
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 3,
				"epoque": "avant-1946",
				"vide": [
					13.8,
					16.6,
					9.7
				],
				"majorationMeuble": 2.1,
				"meuble": [
					15.9,
					19.1,
					11.1
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 3,
				"epoque": "1946-1970",
				"vide": [
					12.4,
					14.9,
					8.7
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.3,
					17.2,
					10
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 3,
				"epoque": "1971-1990",
				"vide": [
					12.9,
					15.5,
					9
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.8,
					17.8,
					10.4
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 3,
				"epoque": "apres-1990",
				"vide": [
					13.4,
					16.1,
					9.4
				],
				"majorationMeuble": 2,
				"meuble": [
					15.4,
					18.5,
					10.8
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 4,
				"epoque": "avant-1946",
				"vide": [
					12.5,
					15,
					8.8
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.4,
					17.3,
					10.1
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 4,
				"epoque": "1946-1970",
				"vide": [
					12.1,
					14.5,
					8.5
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.9,
					16.7,
					9.7
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 4,
				"epoque": "1971-1990",
				"vide": [
					12.2,
					14.6,
					8.5
				],
				"majorationMeuble": 1.8,
				"meuble": [
					14,
					16.8,
					9.8
				]
			},
			{
				"secteur": "2",
				"type": "maison",
				"pieces": 4,
				"epoque": "apres-1990",
				"vide": [
					12.4,
					14.9,
					8.7
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.3,
					17.2,
					10
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 1,
				"epoque": "avant-1946",
				"vide": [
					19.8,
					23.8,
					13.9
				],
				"majorationMeuble": 3,
				"meuble": [
					22.8,
					27.4,
					16
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 1,
				"epoque": "1946-1970",
				"vide": [
					18.2,
					21.8,
					12.7
				],
				"majorationMeuble": 2.7,
				"meuble": [
					20.9,
					25.1,
					14.6
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 1,
				"epoque": "1971-1990",
				"vide": [
					19.1,
					22.9,
					13.4
				],
				"majorationMeuble": 2.9,
				"meuble": [
					22,
					26.4,
					15.4
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 1,
				"epoque": "apres-1990",
				"vide": [
					18.5,
					22.2,
					13
				],
				"majorationMeuble": 2.8,
				"meuble": [
					21.3,
					25.6,
					14.9
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 2,
				"epoque": "avant-1946",
				"vide": [
					15.5,
					18.6,
					10.9
				],
				"majorationMeuble": 2.3,
				"meuble": [
					17.8,
					21.4,
					12.5
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 2,
				"epoque": "1946-1970",
				"vide": [
					13.5,
					16.2,
					9.5
				],
				"majorationMeuble": 2,
				"meuble": [
					15.5,
					18.6,
					10.9
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 2,
				"epoque": "1971-1990",
				"vide": [
					13.9,
					16.7,
					9.7
				],
				"majorationMeuble": 2.1,
				"meuble": [
					16,
					19.2,
					11.2
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 2,
				"epoque": "apres-1990",
				"vide": [
					14.5,
					17.4,
					10.2
				],
				"majorationMeuble": 2.2,
				"meuble": [
					16.7,
					20,
					11.7
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 3,
				"epoque": "avant-1946",
				"vide": [
					12.9,
					15.5,
					9
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.8,
					17.8,
					10.4
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 3,
				"epoque": "1946-1970",
				"vide": [
					12,
					14.4,
					8.4
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.8,
					16.6,
					9.7
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 3,
				"epoque": "1971-1990",
				"vide": [
					12.1,
					14.5,
					8.5
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.9,
					16.7,
					9.7
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 3,
				"epoque": "apres-1990",
				"vide": [
					12.8,
					15.4,
					9
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.7,
					17.6,
					10.3
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 4,
				"epoque": "avant-1946",
				"vide": [
					11.9,
					14.3,
					8.3
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.7,
					16.4,
					9.6
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 4,
				"epoque": "1946-1970",
				"vide": [
					11.3,
					13.6,
					7.9
				],
				"majorationMeuble": 1.7,
				"meuble": [
					13,
					15.6,
					9.1
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 4,
				"epoque": "1971-1990",
				"vide": [
					11.9,
					14.3,
					8.3
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.7,
					16.4,
					9.6
				]
			},
			{
				"secteur": "3",
				"type": "maison",
				"pieces": 4,
				"epoque": "apres-1990",
				"vide": [
					12.1,
					14.5,
					8.5
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.9,
					16.7,
					9.7
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 1,
				"epoque": "avant-1946",
				"vide": [
					17.4,
					20.9,
					12.2
				],
				"majorationMeuble": 2.6,
				"meuble": [
					20,
					24,
					14
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 1,
				"epoque": "1946-1970",
				"vide": [
					16.1,
					19.3,
					11.3
				],
				"majorationMeuble": 2.4,
				"meuble": [
					18.5,
					22.2,
					13
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 1,
				"epoque": "1971-1990",
				"vide": [
					17.4,
					20.9,
					12.2
				],
				"majorationMeuble": 2.6,
				"meuble": [
					20,
					24,
					14
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 1,
				"epoque": "apres-1990",
				"vide": [
					16.1,
					19.3,
					11.3
				],
				"majorationMeuble": 2.4,
				"meuble": [
					18.5,
					22.2,
					13
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 2,
				"epoque": "avant-1946",
				"vide": [
					14,
					16.8,
					9.8
				],
				"majorationMeuble": 2.1,
				"meuble": [
					16.1,
					19.3,
					11.3
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 2,
				"epoque": "1946-1970",
				"vide": [
					13.3,
					16,
					9.3
				],
				"majorationMeuble": 2,
				"meuble": [
					15.3,
					18.4,
					10.7
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 2,
				"epoque": "1971-1990",
				"vide": [
					13.3,
					16,
					9.3
				],
				"majorationMeuble": 2,
				"meuble": [
					15.3,
					18.4,
					10.7
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 2,
				"epoque": "apres-1990",
				"vide": [
					14.3,
					17.2,
					10
				],
				"majorationMeuble": 2.1,
				"meuble": [
					16.4,
					19.7,
					11.5
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 3,
				"epoque": "avant-1946",
				"vide": [
					12.2,
					14.6,
					8.5
				],
				"majorationMeuble": 1.8,
				"meuble": [
					14,
					16.8,
					9.8
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 3,
				"epoque": "1946-1970",
				"vide": [
					11.8,
					14.2,
					8.3
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.6,
					16.3,
					9.5
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 3,
				"epoque": "1971-1990",
				"vide": [
					12.1,
					14.5,
					8.5
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.9,
					16.7,
					9.7
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 3,
				"epoque": "apres-1990",
				"vide": [
					12.7,
					15.2,
					8.9
				],
				"majorationMeuble": 1.9,
				"meuble": [
					14.6,
					17.5,
					10.2
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 4,
				"epoque": "avant-1946",
				"vide": [
					11.9,
					14.3,
					8.3
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.7,
					16.4,
					9.6
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 4,
				"epoque": "1946-1970",
				"vide": [
					11.2,
					13.4,
					7.8
				],
				"majorationMeuble": 1.7,
				"meuble": [
					12.9,
					15.5,
					9
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 4,
				"epoque": "1971-1990",
				"vide": [
					11.8,
					14.2,
					8.3
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.6,
					16.3,
					9.5
				]
			},
			{
				"secteur": "4",
				"type": "maison",
				"pieces": 4,
				"epoque": "apres-1990",
				"vide": [
					11.8,
					14.2,
					8.3
				],
				"majorationMeuble": 1.8,
				"meuble": [
					13.6,
					16.3,
					9.5
				]
			}
		]
	}
};
// src/lib/encadrement/donnees/cadre-legal.json
var cadre_legal_default = {
	texte: "Loi n° 2018-1021 du 23 novembre 2018 (ELAN), article 140, durée portée à 8 ans par la loi n° 2022-217 (3DS)",
	finExperimentation: "2026-11-24",
	prolongation: {
		"statut": "en-discussion",
		"resume": "Proposition de loi « retrouver la confiance et l'équilibre dans les rapports locatifs » : prolongation de 2 ans à périmètre constant votée par le Sénat le 21 octobre 2026, en deuxième lecture à l'Assemblée nationale (texte de la commission n° 3432 du 4 novembre 2026).",
		"source": "https://www.senat.fr/dossier-legislatif/ppl25-217.html",
		"verifieLe": "2026-11-12"
	}
};
// src/lib/encadrement/index.ts
const TERRITOIRES = [
	{
		id: "paris",
		nom: "Paris",
		arrete: {
			"numero": "IDF-2026-06-12-00003",
			"signeLe": "2026-06-12",
			"publieLe": "2026-06-15",
			"valideDu": "2026-07-01",
			"valideJusquau": "2026-11-24",
			"url": "https://www.drihl.ile-de-france.developpement-durable.gouv.fr/IMG/pdf/arrete_no_2026-06-12-00003_fixant_les_loyers_de_reference_les_loyers_de_reference_majores_et_les_loyers_de_reference_minores_pour_de_la_ville_de_paris_du_1er_jullet_2026_au_24_novembre_2026_.pdf",
			"page": "https://www.drihl.ile-de-france.developpement-durable.gouv.fr/arretes-fixant-les-loyers-de-reference-les-loyers-a291.html"
		},
		genereLe: "2026-11-12",
		communes: [{
			"insee": "75056",
			"nom": "Paris",
			"codesArrondissements": [
				"75101",
				"75102",
				"75103",
				"75104",
				"75105",
				"75106",
				"75107",
				"75108",
				"75109",
				"75110",
				"75111",
				"75112",
				"75113",
				"75114",
				"75115",
				"75116",
				"75117",
				"75118",
				"75119",
				"75120"
			],
			"couverture": "totale"
		}],
		zonage: {
			"maille": "quartier",
			"resolution": "80 quartiers administratifs regroupés en 14 secteurs (annexe 1). Adresse vers quartier : géocoder avec la BAN (api-adresse.data.gouv.fr), puis point dans polygone sur le GeoJSON des quartiers (champ c_qu).",
			"geodonnees": "https://opendata.paris.fr/explore/dataset/quartier_paris/"
		},
		quartiers: [
			{
				"numero": 1,
				"nom": "Saint-Germain-l'Auxerrois",
				"arrondissement": 1,
				"secteur": "2"
			},
			{
				"numero": 2,
				"nom": "Halles",
				"arrondissement": 1,
				"secteur": "5"
			},
			{
				"numero": 3,
				"nom": "Palais-Royal",
				"arrondissement": 1,
				"secteur": "2"
			},
			{
				"numero": 4,
				"nom": "Place-Vendôme",
				"arrondissement": 1,
				"secteur": "2"
			},
			{
				"numero": 5,
				"nom": "Gaillon",
				"arrondissement": 2,
				"secteur": "2"
			},
			{
				"numero": 6,
				"nom": "Vivienne",
				"arrondissement": 2,
				"secteur": "4"
			},
			{
				"numero": 7,
				"nom": "Mail",
				"arrondissement": 2,
				"secteur": "4"
			},
			{
				"numero": 8,
				"nom": "Bonne-Nouvelle",
				"arrondissement": 2,
				"secteur": "4"
			},
			{
				"numero": 9,
				"nom": "Arts-et-Métiers",
				"arrondissement": 3,
				"secteur": "4"
			},
			{
				"numero": 10,
				"nom": "Enfants-Rouges",
				"arrondissement": 3,
				"secteur": "4"
			},
			{
				"numero": 11,
				"nom": "Archives",
				"arrondissement": 3,
				"secteur": "4"
			},
			{
				"numero": 12,
				"nom": "Sainte-Avoie",
				"arrondissement": 3,
				"secteur": "4"
			},
			{
				"numero": 13,
				"nom": "Saint-Merri",
				"arrondissement": 4,
				"secteur": "2"
			},
			{
				"numero": 14,
				"nom": "Saint-Gervais",
				"arrondissement": 4,
				"secteur": "4"
			},
			{
				"numero": 15,
				"nom": "Arsenal",
				"arrondissement": 4,
				"secteur": "2"
			},
			{
				"numero": 16,
				"nom": "Notre-Dame",
				"arrondissement": 4,
				"secteur": "2"
			},
			{
				"numero": 17,
				"nom": "Saint-Victor",
				"arrondissement": 5,
				"secteur": "4"
			},
			{
				"numero": 18,
				"nom": "Jardin-des-plantes",
				"arrondissement": 5,
				"secteur": "10"
			},
			{
				"numero": 19,
				"nom": "Val-de-Grâce",
				"arrondissement": 5,
				"secteur": "4"
			},
			{
				"numero": 20,
				"nom": "Sorbonne",
				"arrondissement": 5,
				"secteur": "4"
			},
			{
				"numero": 21,
				"nom": "Monnaie",
				"arrondissement": 6,
				"secteur": "2"
			},
			{
				"numero": 22,
				"nom": "Odéon",
				"arrondissement": 6,
				"secteur": "2"
			},
			{
				"numero": 23,
				"nom": "Notre-Dame des Champs",
				"arrondissement": 6,
				"secteur": "1"
			},
			{
				"numero": 24,
				"nom": "Saint-Germain des Prés",
				"arrondissement": 6,
				"secteur": "2"
			},
			{
				"numero": 25,
				"nom": "Saint-Thomas-d'Aquin",
				"arrondissement": 7,
				"secteur": "1"
			},
			{
				"numero": 26,
				"nom": "Invalides",
				"arrondissement": 7,
				"secteur": "1"
			},
			{
				"numero": 27,
				"nom": "Ecole-Militaire",
				"arrondissement": 7,
				"secteur": "1"
			},
			{
				"numero": 28,
				"nom": "Gros-Caillou",
				"arrondissement": 7,
				"secteur": "1"
			},
			{
				"numero": 29,
				"nom": "Champs-Élysées",
				"arrondissement": 8,
				"secteur": "2"
			},
			{
				"numero": 30,
				"nom": "Faubourg-du-Roule",
				"arrondissement": 8,
				"secteur": "2"
			},
			{
				"numero": 31,
				"nom": "Madeleine",
				"arrondissement": 8,
				"secteur": "2"
			},
			{
				"numero": 32,
				"nom": "Europe",
				"arrondissement": 8,
				"secteur": "3"
			},
			{
				"numero": 33,
				"nom": "Saint-Georges",
				"arrondissement": 9,
				"secteur": "5"
			},
			{
				"numero": 34,
				"nom": "Chaussée-d'Antin",
				"arrondissement": 9,
				"secteur": "2"
			},
			{
				"numero": 35,
				"nom": "Faubourg-Montmartre",
				"arrondissement": 9,
				"secteur": "5"
			},
			{
				"numero": 36,
				"nom": "Rochechouart",
				"arrondissement": 9,
				"secteur": "5"
			},
			{
				"numero": 37,
				"nom": "Saint-Vincent-de-Paul",
				"arrondissement": 10,
				"secteur": "5"
			},
			{
				"numero": 38,
				"nom": "Porte-Saint-Denis",
				"arrondissement": 10,
				"secteur": "5"
			},
			{
				"numero": 39,
				"nom": "Porte-Saint-Martin",
				"arrondissement": 10,
				"secteur": "11"
			},
			{
				"numero": 40,
				"nom": "Hôpital-Saint-Louis",
				"arrondissement": 10,
				"secteur": "11"
			},
			{
				"numero": 41,
				"nom": "Folie-Méricourt",
				"arrondissement": 11,
				"secteur": "11"
			},
			{
				"numero": 42,
				"nom": "Saint-Ambroise",
				"arrondissement": 11,
				"secteur": "10"
			},
			{
				"numero": 43,
				"nom": "Roquette",
				"arrondissement": 11,
				"secteur": "11"
			},
			{
				"numero": 44,
				"nom": "Sainte-Marguerite",
				"arrondissement": 11,
				"secteur": "10"
			},
			{
				"numero": 45,
				"nom": "Bel-Air",
				"arrondissement": 12,
				"secteur": "14"
			},
			{
				"numero": 46,
				"nom": "Picpus",
				"arrondissement": 12,
				"secteur": "9"
			},
			{
				"numero": 47,
				"nom": "Bercy",
				"arrondissement": 12,
				"secteur": "14"
			},
			{
				"numero": 48,
				"nom": "Quinze-Vingts",
				"arrondissement": 12,
				"secteur": "11"
			},
			{
				"numero": 49,
				"nom": "Salpêtrière",
				"arrondissement": 13,
				"secteur": "10"
			},
			{
				"numero": 50,
				"nom": "Gare",
				"arrondissement": 13,
				"secteur": "13"
			},
			{
				"numero": 51,
				"nom": "Maison-Blanche",
				"arrondissement": 13,
				"secteur": "12"
			},
			{
				"numero": 52,
				"nom": "Croulebarbe",
				"arrondissement": 13,
				"secteur": "5"
			},
			{
				"numero": 53,
				"nom": "Montparnasse",
				"arrondissement": 14,
				"secteur": "5"
			},
			{
				"numero": 54,
				"nom": "Parc-de-Montsouris",
				"arrondissement": 14,
				"secteur": "11"
			},
			{
				"numero": 55,
				"nom": "Petit-Montrouge",
				"arrondissement": 14,
				"secteur": "10"
			},
			{
				"numero": 56,
				"nom": "Plaisance",
				"arrondissement": 14,
				"secteur": "12"
			},
			{
				"numero": 57,
				"nom": "Saint-Lambert",
				"arrondissement": 15,
				"secteur": "8"
			},
			{
				"numero": 58,
				"nom": "Necker",
				"arrondissement": 15,
				"secteur": "6"
			},
			{
				"numero": 59,
				"nom": "Grenelle",
				"arrondissement": 15,
				"secteur": "7"
			},
			{
				"numero": 60,
				"nom": "Javel",
				"arrondissement": 15,
				"secteur": "7"
			},
			{
				"numero": 61,
				"nom": "Auteuil",
				"arrondissement": 16,
				"secteur": "7"
			},
			{
				"numero": 62,
				"nom": "Muette",
				"arrondissement": 16,
				"secteur": "3"
			},
			{
				"numero": 63,
				"nom": "Porte-Dauphine",
				"arrondissement": 16,
				"secteur": "3"
			},
			{
				"numero": 64,
				"nom": "Chaillot",
				"arrondissement": 16,
				"secteur": "3"
			},
			{
				"numero": 65,
				"nom": "Ternes",
				"arrondissement": 17,
				"secteur": "6"
			},
			{
				"numero": 66,
				"nom": "Plaine-de-Monceaux",
				"arrondissement": 17,
				"secteur": "6"
			},
			{
				"numero": 67,
				"nom": "Batignolles",
				"arrondissement": 17,
				"secteur": "10"
			},
			{
				"numero": 68,
				"nom": "Épinettes",
				"arrondissement": 17,
				"secteur": "11"
			},
			{
				"numero": 69,
				"nom": "Grandes-Carrières",
				"arrondissement": 18,
				"secteur": "9"
			},
			{
				"numero": 70,
				"nom": "Clignancourt",
				"arrondissement": 18,
				"secteur": "9"
			},
			{
				"numero": 71,
				"nom": "Goutte-d'Or",
				"arrondissement": 18,
				"secteur": "11"
			},
			{
				"numero": 72,
				"nom": "Chapelle",
				"arrondissement": 18,
				"secteur": "13"
			},
			{
				"numero": 73,
				"nom": "Villette",
				"arrondissement": 19,
				"secteur": "13"
			},
			{
				"numero": 74,
				"nom": "Pont-de-Flandre",
				"arrondissement": 19,
				"secteur": "13"
			},
			{
				"numero": 75,
				"nom": "Amérique",
				"arrondissement": 19,
				"secteur": "13"
			},
			{
				"numero": 76,
				"nom": "Combat",
				"arrondissement": 19,
				"secteur": "14"
			},
			{
				"numero": 77,
				"nom": "Belleville",
				"arrondissement": 20,
				"secteur": "11"
			},
			{
				"numero": 78,
				"nom": "Saint-Fargeau",
				"arrondissement": 20,
				"secteur": "13"
			},
			{
				"numero": 79,
				"nom": "Père-Lachaise",
				"arrondissement": 20,
				"secteur": "14"
			},
			{
				"numero": 80,
				"nom": "Charonne",
				"arrondissement": 20,
				"secteur": "13"
			}
		],
		donnees: {
			"epoques": [
				{
					"cle": "avant-1946",
					"libelle": "avant 1946",
					"de": null,
					"a": 1945
				},
				{
					"cle": "1946-1970",
					"libelle": "1946-1970",
					"de": 1946,
					"a": 1970
				},
				{
					"cle": "1971-1990",
					"libelle": "1971-1990",
					"de": 1971,
					"a": 1990
				},
				{
					"cle": "apres-1990",
					"libelle": "après 1990",
					"de": 1991,
					"a": null
				}
			],
			"source": {
				"url": "https://www.drihl.ile-de-france.developpement-durable.gouv.fr/IMG/pdf/arrete_no_2026-06-12-00003_fixant_les_loyers_de_reference_les_loyers_de_reference_majores_et_les_loyers_de_reference_minores_pour_de_la_ville_de_paris_du_1er_jullet_2026_au_24_novembre_2026_.pdf",
				"methode": "Annexes 1 et 2 du PDF de l'arrêté (texte), recoupées avec les KML de la DRIHL.",
				"recupereLe": "2026-11-12"
			},
			"lignes": [
				{
					"epoque": "avant-1946",
					"vide": [
						35.5,
						42.6,
						24.9
					],
					"majorationMeuble": 5,
					"meuble": [
						40.5,
						48.6,
						28.4
					],
					"secteur": "1",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						35.5,
						42.6,
						24.9
					],
					"majorationMeuble": 5,
					"meuble": [
						40.5,
						48.6,
						28.4
					],
					"secteur": "1",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						33.6,
						40.3,
						23.5
					],
					"majorationMeuble": 4.7,
					"meuble": [
						38.3,
						46,
						26.8
					],
					"secteur": "1",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						38.2,
						45.8,
						26.7
					],
					"majorationMeuble": 5.3,
					"meuble": [
						43.5,
						52.2,
						30.5
					],
					"secteur": "1",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						31.6,
						37.9,
						22.1
					],
					"majorationMeuble": 4.4,
					"meuble": [
						36,
						43.2,
						25.2
					],
					"secteur": "1",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						31.5,
						37.8,
						22.1
					],
					"majorationMeuble": 4.4,
					"meuble": [
						35.9,
						43.1,
						25.1
					],
					"secteur": "1",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						29.3,
						35.2,
						20.5
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.4,
						40.1,
						23.4
					],
					"secteur": "1",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						32.4,
						38.9,
						22.7
					],
					"majorationMeuble": 4.5,
					"meuble": [
						36.9,
						44.3,
						25.8
					],
					"secteur": "1",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						30,
						36,
						21
					],
					"majorationMeuble": 4.2,
					"meuble": [
						34.2,
						41,
						23.9
					],
					"secteur": "1",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						29.6,
						35.5,
						20.7
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.7,
						40.4,
						23.6
					],
					"secteur": "1",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						29,
						34.8,
						20.3
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.1,
						39.7,
						23.2
					],
					"secteur": "1",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						31,
						37.2,
						21.7
					],
					"majorationMeuble": 4.3,
					"meuble": [
						35.3,
						42.4,
						24.7
					],
					"secteur": "1",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						31.5,
						37.8,
						22.1
					],
					"majorationMeuble": 4.4,
					"meuble": [
						35.9,
						43.1,
						25.1
					],
					"secteur": "1",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						27.4,
						32.9,
						19.2
					],
					"majorationMeuble": 3.8,
					"meuble": [
						31.2,
						37.4,
						21.8
					],
					"secteur": "1",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						28,
						33.6,
						19.6
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.9,
						38.3,
						22.3
					],
					"secteur": "1",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						31.8,
						38.2,
						22.3
					],
					"majorationMeuble": 4.5,
					"meuble": [
						36.3,
						43.6,
						25.4
					],
					"secteur": "1",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						36.1,
						43.3,
						25.3
					],
					"majorationMeuble": 5.1,
					"meuble": [
						41.2,
						49.4,
						28.8
					],
					"secteur": "2",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						35.2,
						42.2,
						24.6
					],
					"majorationMeuble": 4.9,
					"meuble": [
						40.1,
						48.1,
						28.1
					],
					"secteur": "2",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						33.2,
						39.8,
						23.2
					],
					"majorationMeuble": 4.6,
					"meuble": [
						37.8,
						45.4,
						26.5
					],
					"secteur": "2",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						32.6,
						39.1,
						22.8
					],
					"majorationMeuble": 4.6,
					"meuble": [
						37.2,
						44.6,
						26
					],
					"secteur": "2",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						31.9,
						38.3,
						22.3
					],
					"majorationMeuble": 4.5,
					"meuble": [
						36.4,
						43.7,
						25.5
					],
					"secteur": "2",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						29.5,
						35.4,
						20.7
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.6,
						40.3,
						23.5
					],
					"secteur": "2",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						30.2,
						36.2,
						21.1
					],
					"majorationMeuble": 4.2,
					"meuble": [
						34.4,
						41.3,
						24.1
					],
					"secteur": "2",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						29,
						34.8,
						20.3
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.1,
						39.7,
						23.2
					],
					"secteur": "2",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						30.1,
						36.1,
						21.1
					],
					"majorationMeuble": 4.2,
					"meuble": [
						34.3,
						41.2,
						24
					],
					"secteur": "2",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						24.1,
						28.9,
						16.9
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.5,
						33,
						19.3
					],
					"secteur": "2",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						25.3,
						30.4,
						17.7
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.8,
						34.6,
						20.2
					],
					"secteur": "2",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						27.6,
						33.1,
						19.3
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.5,
						37.8,
						22.1
					],
					"secteur": "2",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						28.2,
						33.8,
						19.7
					],
					"majorationMeuble": 3.9,
					"meuble": [
						32.1,
						38.5,
						22.5
					],
					"secteur": "2",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						25.4,
						30.5,
						17.8
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29,
						34.8,
						20.3
					],
					"secteur": "2",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						24.5,
						29.4,
						17.2
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.9,
						33.5,
						19.5
					],
					"secteur": "2",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						28.5,
						34.2,
						20
					],
					"majorationMeuble": 4,
					"meuble": [
						32.5,
						39,
						22.8
					],
					"secteur": "2",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						31.6,
						37.9,
						22.1
					],
					"majorationMeuble": 4.4,
					"meuble": [
						36,
						43.2,
						25.2
					],
					"secteur": "3",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						31.6,
						37.9,
						22.1
					],
					"majorationMeuble": 4.4,
					"meuble": [
						36,
						43.2,
						25.2
					],
					"secteur": "3",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						32.1,
						38.5,
						22.5
					],
					"majorationMeuble": 4.5,
					"meuble": [
						36.6,
						43.9,
						25.6
					],
					"secteur": "3",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						29.4,
						35.3,
						20.6
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.5,
						40.2,
						23.5
					],
					"secteur": "3",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						29.3,
						35.2,
						20.5
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.4,
						40.1,
						23.4
					],
					"secteur": "3",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						29.7,
						35.6,
						20.8
					],
					"majorationMeuble": 4.2,
					"meuble": [
						33.9,
						40.7,
						23.7
					],
					"secteur": "3",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						29.7,
						35.6,
						20.8
					],
					"majorationMeuble": 4.2,
					"meuble": [
						33.9,
						40.7,
						23.7
					],
					"secteur": "3",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						29.9,
						35.9,
						20.9
					],
					"majorationMeuble": 4.2,
					"meuble": [
						34.1,
						40.9,
						23.9
					],
					"secteur": "3",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						27.2,
						32.6,
						19
					],
					"majorationMeuble": 3.8,
					"meuble": [
						31,
						37.2,
						21.7
					],
					"secteur": "3",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						29.2,
						35,
						20.4
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.3,
						40,
						23.3
					],
					"secteur": "3",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						29.2,
						35,
						20.4
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.3,
						40,
						23.3
					],
					"secteur": "3",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						28,
						33.6,
						19.6
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.9,
						38.3,
						22.3
					],
					"secteur": "3",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						26.8,
						32.2,
						18.8
					],
					"majorationMeuble": 3.8,
					"meuble": [
						30.6,
						36.7,
						21.4
					],
					"secteur": "3",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						26.5,
						31.8,
						18.6
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30.2,
						36.2,
						21.1
					],
					"secteur": "3",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						28,
						33.6,
						19.6
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.9,
						38.3,
						22.3
					],
					"secteur": "3",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						27.6,
						33.1,
						19.3
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.5,
						37.8,
						22.1
					],
					"secteur": "3",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						35.2,
						42.2,
						24.6
					],
					"majorationMeuble": 4.9,
					"meuble": [
						40.1,
						48.1,
						28.1
					],
					"secteur": "4",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						33.5,
						40.2,
						23.5
					],
					"majorationMeuble": 4.7,
					"meuble": [
						38.2,
						45.8,
						26.7
					],
					"secteur": "4",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						33,
						39.6,
						23.1
					],
					"majorationMeuble": 4.6,
					"meuble": [
						37.6,
						45.1,
						26.3
					],
					"secteur": "4",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						31.2,
						37.4,
						21.8
					],
					"majorationMeuble": 4.4,
					"meuble": [
						35.6,
						42.7,
						24.9
					],
					"secteur": "4",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						31.1,
						37.3,
						21.8
					],
					"majorationMeuble": 4.4,
					"meuble": [
						35.5,
						42.6,
						24.9
					],
					"secteur": "4",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						28.2,
						33.8,
						19.7
					],
					"majorationMeuble": 3.9,
					"meuble": [
						32.1,
						38.5,
						22.5
					],
					"secteur": "4",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						25.4,
						30.5,
						17.8
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29,
						34.8,
						20.3
					],
					"secteur": "4",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						25.7,
						30.8,
						18
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.3,
						35.2,
						20.5
					],
					"secteur": "4",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						27.7,
						33.2,
						19.4
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.6,
						37.9,
						22.1
					],
					"secteur": "4",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						24.2,
						29,
						16.9
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.6,
						33.1,
						19.3
					],
					"secteur": "4",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						26.8,
						32.2,
						18.8
					],
					"majorationMeuble": 3.8,
					"meuble": [
						30.6,
						36.7,
						21.4
					],
					"secteur": "4",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						25.2,
						30.2,
						17.6
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.7,
						34.4,
						20.1
					],
					"secteur": "4",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						28.4,
						34.1,
						19.9
					],
					"majorationMeuble": 4,
					"meuble": [
						32.4,
						38.9,
						22.7
					],
					"secteur": "4",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						25.6,
						30.7,
						17.9
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.2,
						35,
						20.4
					],
					"secteur": "4",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						26.4,
						31.7,
						18.5
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30.1,
						36.1,
						21.1
					],
					"secteur": "4",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						27.9,
						33.5,
						19.5
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.8,
						38.2,
						22.3
					],
					"secteur": "4",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						33.6,
						40.3,
						23.5
					],
					"majorationMeuble": 4.7,
					"meuble": [
						38.3,
						46,
						26.8
					],
					"secteur": "5",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						30.7,
						36.8,
						21.5
					],
					"majorationMeuble": 4.3,
					"meuble": [
						35,
						42,
						24.5
					],
					"secteur": "5",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						30.2,
						36.2,
						21.1
					],
					"majorationMeuble": 4.2,
					"meuble": [
						34.4,
						41.3,
						24.1
					],
					"secteur": "5",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						31.5,
						37.8,
						22.1
					],
					"majorationMeuble": 4.4,
					"meuble": [
						35.9,
						43.1,
						25.1
					],
					"secteur": "5",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						28.7,
						34.4,
						20.1
					],
					"majorationMeuble": 4,
					"meuble": [
						32.7,
						39.2,
						22.9
					],
					"secteur": "5",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						28.6,
						34.3,
						20
					],
					"majorationMeuble": 4,
					"meuble": [
						32.6,
						39.1,
						22.8
					],
					"secteur": "5",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						26.7,
						32,
						18.7
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30.4,
						36.5,
						21.3
					],
					"secteur": "5",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						27.7,
						33.2,
						19.4
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.6,
						37.9,
						22.1
					],
					"secteur": "5",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						25.8,
						31,
						18.1
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.4,
						35.3,
						20.6
					],
					"secteur": "5",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						22.2,
						26.6,
						15.5
					],
					"majorationMeuble": 3.1,
					"meuble": [
						25.3,
						30.4,
						17.7
					],
					"secteur": "5",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						23.8,
						28.6,
						16.7
					],
					"majorationMeuble": 3.3,
					"meuble": [
						27.1,
						32.5,
						19
					],
					"secteur": "5",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						26.2,
						31.4,
						18.3
					],
					"majorationMeuble": 3.7,
					"meuble": [
						29.9,
						35.9,
						20.9
					],
					"secteur": "5",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						22.9,
						27.5,
						16
					],
					"majorationMeuble": 3.2,
					"meuble": [
						26.1,
						31.3,
						18.3
					],
					"secteur": "5",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						23.3,
						28,
						16.3
					],
					"majorationMeuble": 3.3,
					"meuble": [
						26.6,
						31.9,
						18.6
					],
					"secteur": "5",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						21.9,
						26.3,
						15.3
					],
					"majorationMeuble": 3.1,
					"meuble": [
						25,
						30,
						17.5
					],
					"secteur": "5",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						26.3,
						31.6,
						18.4
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30,
						36,
						21
					],
					"secteur": "5",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						32.5,
						39,
						22.8
					],
					"majorationMeuble": 4.6,
					"meuble": [
						37.1,
						44.5,
						26
					],
					"secteur": "6",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						30.5,
						36.6,
						21.4
					],
					"majorationMeuble": 4.3,
					"meuble": [
						34.8,
						41.8,
						24.4
					],
					"secteur": "6",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						32.2,
						38.6,
						22.5
					],
					"majorationMeuble": 4.5,
					"meuble": [
						36.7,
						44,
						25.7
					],
					"secteur": "6",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						29.3,
						35.2,
						20.5
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.4,
						40.1,
						23.4
					],
					"secteur": "6",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						29,
						34.8,
						20.3
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.1,
						39.7,
						23.2
					],
					"secteur": "6",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						28.4,
						34.1,
						19.9
					],
					"majorationMeuble": 4,
					"meuble": [
						32.4,
						38.9,
						22.7
					],
					"secteur": "6",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						29.3,
						35.2,
						20.5
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.4,
						40.1,
						23.4
					],
					"secteur": "6",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						26.8,
						32.2,
						18.8
					],
					"majorationMeuble": 3.8,
					"meuble": [
						30.6,
						36.7,
						21.4
					],
					"secteur": "6",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						27.9,
						33.5,
						19.5
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.8,
						38.2,
						22.3
					],
					"secteur": "6",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						27.1,
						32.5,
						19
					],
					"majorationMeuble": 3.8,
					"meuble": [
						30.9,
						37.1,
						21.6
					],
					"secteur": "6",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						26.5,
						31.8,
						18.6
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30.2,
						36.2,
						21.1
					],
					"secteur": "6",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						26,
						31.2,
						18.2
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.6,
						35.5,
						20.7
					],
					"secteur": "6",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						26.6,
						31.9,
						18.6
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30.3,
						36.4,
						21.2
					],
					"secteur": "6",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						25,
						30,
						17.5
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.5,
						34.2,
						20
					],
					"secteur": "6",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						25,
						30,
						17.5
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.5,
						34.2,
						20
					],
					"secteur": "6",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						25.3,
						30.4,
						17.7
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.8,
						34.6,
						20.2
					],
					"secteur": "6",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						31.6,
						37.9,
						22.1
					],
					"majorationMeuble": 4.4,
					"meuble": [
						36,
						43.2,
						25.2
					],
					"secteur": "7",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						29.5,
						35.4,
						20.7
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.6,
						40.3,
						23.5
					],
					"secteur": "7",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						29.8,
						35.8,
						20.9
					],
					"majorationMeuble": 4.2,
					"meuble": [
						34,
						40.8,
						23.8
					],
					"secteur": "7",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						27.6,
						33.1,
						19.3
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.5,
						37.8,
						22.1
					],
					"secteur": "7",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						27.1,
						32.5,
						19
					],
					"majorationMeuble": 3.8,
					"meuble": [
						30.9,
						37.1,
						21.6
					],
					"secteur": "7",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						27,
						32.4,
						18.9
					],
					"majorationMeuble": 3.8,
					"meuble": [
						30.8,
						37,
						21.6
					],
					"secteur": "7",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						26.5,
						31.8,
						18.6
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30.2,
						36.2,
						21.1
					],
					"secteur": "7",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						28.6,
						34.3,
						20
					],
					"majorationMeuble": 4,
					"meuble": [
						32.6,
						39.1,
						22.8
					],
					"secteur": "7",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						26.4,
						31.7,
						18.5
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30.1,
						36.1,
						21.1
					],
					"secteur": "7",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						23.3,
						28,
						16.3
					],
					"majorationMeuble": 3.3,
					"meuble": [
						26.6,
						31.9,
						18.6
					],
					"secteur": "7",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						24.1,
						28.9,
						16.9
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.5,
						33,
						19.3
					],
					"secteur": "7",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						26.9,
						32.3,
						18.8
					],
					"majorationMeuble": 3.8,
					"meuble": [
						30.7,
						36.8,
						21.5
					],
					"secteur": "7",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						25.6,
						30.7,
						17.9
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.2,
						35,
						20.4
					],
					"secteur": "7",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						24.1,
						28.9,
						16.9
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.5,
						33,
						19.3
					],
					"secteur": "7",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						25,
						30,
						17.5
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.5,
						34.2,
						20
					],
					"secteur": "7",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						26.3,
						31.6,
						18.4
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30,
						36,
						21
					],
					"secteur": "7",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						31,
						37.2,
						21.7
					],
					"majorationMeuble": 4.3,
					"meuble": [
						35.3,
						42.4,
						24.7
					],
					"secteur": "8",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						28,
						33.6,
						19.6
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.9,
						38.3,
						22.3
					],
					"secteur": "8",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						27.6,
						33.1,
						19.3
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.5,
						37.8,
						22.1
					],
					"secteur": "8",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						30,
						36,
						21
					],
					"majorationMeuble": 4.2,
					"meuble": [
						34.2,
						41,
						23.9
					],
					"secteur": "8",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						25.9,
						31.1,
						18.1
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.5,
						35.4,
						20.7
					],
					"secteur": "8",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						25,
						30,
						17.5
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.5,
						34.2,
						20
					],
					"secteur": "8",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						26.4,
						31.7,
						18.5
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30.1,
						36.1,
						21.1
					],
					"secteur": "8",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						26.7,
						32,
						18.7
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30.4,
						36.5,
						21.3
					],
					"secteur": "8",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						25,
						30,
						17.5
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.5,
						34.2,
						20
					],
					"secteur": "8",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						19.9,
						23.9,
						13.9
					],
					"majorationMeuble": 2.8,
					"meuble": [
						22.7,
						27.2,
						15.9
					],
					"secteur": "8",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						24.4,
						29.3,
						17.1
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.8,
						33.4,
						19.5
					],
					"secteur": "8",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						26.8,
						32.2,
						18.8
					],
					"majorationMeuble": 3.8,
					"meuble": [
						30.6,
						36.7,
						21.4
					],
					"secteur": "8",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						24.7,
						29.6,
						17.3
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.2,
						33.8,
						19.7
					],
					"secteur": "8",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						22.3,
						26.8,
						15.6
					],
					"majorationMeuble": 3.1,
					"meuble": [
						25.4,
						30.5,
						17.8
					],
					"secteur": "8",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						25,
						30,
						17.5
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.5,
						34.2,
						20
					],
					"secteur": "8",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						25.5,
						30.6,
						17.9
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.1,
						34.9,
						20.4
					],
					"secteur": "8",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						29.9,
						35.9,
						20.9
					],
					"majorationMeuble": 4.2,
					"meuble": [
						34.1,
						40.9,
						23.9
					],
					"secteur": "9",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						28.3,
						34,
						19.8
					],
					"majorationMeuble": 4,
					"meuble": [
						32.3,
						38.8,
						22.6
					],
					"secteur": "9",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						26.5,
						31.8,
						18.6
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30.2,
						36.2,
						21.1
					],
					"secteur": "9",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						26.3,
						31.6,
						18.4
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30,
						36,
						21
					],
					"secteur": "9",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						26.3,
						31.6,
						18.4
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30,
						36,
						21
					],
					"secteur": "9",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						23.8,
						28.6,
						16.7
					],
					"majorationMeuble": 3.3,
					"meuble": [
						27.1,
						32.5,
						19
					],
					"secteur": "9",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						25.8,
						31,
						18.1
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.4,
						35.3,
						20.6
					],
					"secteur": "9",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						27,
						32.4,
						18.9
					],
					"majorationMeuble": 3.8,
					"meuble": [
						30.8,
						37,
						21.6
					],
					"secteur": "9",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						24.4,
						29.3,
						17.1
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.8,
						33.4,
						19.5
					],
					"secteur": "9",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						21.4,
						25.7,
						15
					],
					"majorationMeuble": 3,
					"meuble": [
						24.4,
						29.3,
						17.1
					],
					"secteur": "9",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						24.3,
						29.2,
						17
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.7,
						33.2,
						19.4
					],
					"secteur": "9",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						24.9,
						29.9,
						17.4
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.4,
						34.1,
						19.9
					],
					"secteur": "9",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						24.3,
						29.2,
						17
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.7,
						33.2,
						19.4
					],
					"secteur": "9",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						20.6,
						24.7,
						14.4
					],
					"majorationMeuble": 2.9,
					"meuble": [
						23.5,
						28.2,
						16.5
					],
					"secteur": "9",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						21.3,
						25.6,
						14.9
					],
					"majorationMeuble": 3,
					"meuble": [
						24.3,
						29.2,
						17
					],
					"secteur": "9",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						23.6,
						28.3,
						16.5
					],
					"majorationMeuble": 3.3,
					"meuble": [
						26.9,
						32.3,
						18.8
					],
					"secteur": "9",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						32.3,
						38.8,
						22.6
					],
					"majorationMeuble": 4.5,
					"meuble": [
						36.8,
						44.2,
						25.8
					],
					"secteur": "10",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						27.6,
						33.1,
						19.3
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.5,
						37.8,
						22.1
					],
					"secteur": "10",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						30.1,
						36.1,
						21.1
					],
					"majorationMeuble": 4.2,
					"meuble": [
						34.3,
						41.2,
						24
					],
					"secteur": "10",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						30.6,
						36.7,
						21.4
					],
					"majorationMeuble": 4.3,
					"meuble": [
						34.9,
						41.9,
						24.4
					],
					"secteur": "10",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						28.1,
						33.7,
						19.7
					],
					"majorationMeuble": 3.9,
					"meuble": [
						32,
						38.4,
						22.4
					],
					"secteur": "10",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						24.9,
						29.9,
						17.4
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.4,
						34.1,
						19.9
					],
					"secteur": "10",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						25.5,
						30.6,
						17.9
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.1,
						34.9,
						20.4
					],
					"secteur": "10",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						24.6,
						29.5,
						17.2
					],
					"majorationMeuble": 3.4,
					"meuble": [
						28,
						33.6,
						19.6
					],
					"secteur": "10",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						26.7,
						32,
						18.7
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30.4,
						36.5,
						21.3
					],
					"secteur": "10",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						22.6,
						27.1,
						15.8
					],
					"majorationMeuble": 3.2,
					"meuble": [
						25.8,
						31,
						18.1
					],
					"secteur": "10",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						24.7,
						29.6,
						17.3
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.2,
						33.8,
						19.7
					],
					"secteur": "10",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						23.4,
						28.1,
						16.4
					],
					"majorationMeuble": 3.3,
					"meuble": [
						26.7,
						32,
						18.7
					],
					"secteur": "10",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						24.8,
						29.8,
						17.4
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.3,
						34,
						19.8
					],
					"secteur": "10",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						23.8,
						28.6,
						16.7
					],
					"majorationMeuble": 3.3,
					"meuble": [
						27.1,
						32.5,
						19
					],
					"secteur": "10",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						24.3,
						29.2,
						17
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.7,
						33.2,
						19.4
					],
					"secteur": "10",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						22.8,
						27.4,
						16
					],
					"majorationMeuble": 3.2,
					"meuble": [
						26,
						31.2,
						18.2
					],
					"secteur": "10",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						31.5,
						37.8,
						22.1
					],
					"majorationMeuble": 4.4,
					"meuble": [
						35.9,
						43.1,
						25.1
					],
					"secteur": "11",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						27.2,
						32.6,
						19
					],
					"majorationMeuble": 3.8,
					"meuble": [
						31,
						37.2,
						21.7
					],
					"secteur": "11",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						28.7,
						34.4,
						20.1
					],
					"majorationMeuble": 4,
					"meuble": [
						32.7,
						39.2,
						22.9
					],
					"secteur": "11",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						26.2,
						31.4,
						18.3
					],
					"majorationMeuble": 3.7,
					"meuble": [
						29.9,
						35.9,
						20.9
					],
					"secteur": "11",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						27.3,
						32.8,
						19.1
					],
					"majorationMeuble": 3.8,
					"meuble": [
						31.1,
						37.3,
						21.8
					],
					"secteur": "11",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						26.3,
						31.6,
						18.4
					],
					"majorationMeuble": 3.7,
					"meuble": [
						30,
						36,
						21
					],
					"secteur": "11",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						26,
						31.2,
						18.2
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.6,
						35.5,
						20.7
					],
					"secteur": "11",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						24.3,
						29.2,
						17
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.7,
						33.2,
						19.4
					],
					"secteur": "11",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						25.8,
						31,
						18.1
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.4,
						35.3,
						20.6
					],
					"secteur": "11",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						21.6,
						25.9,
						15.1
					],
					"majorationMeuble": 3,
					"meuble": [
						24.6,
						29.5,
						17.2
					],
					"secteur": "11",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						20.9,
						25.1,
						14.6
					],
					"majorationMeuble": 2.9,
					"meuble": [
						23.8,
						28.6,
						16.7
					],
					"secteur": "11",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						23.9,
						28.7,
						16.7
					],
					"majorationMeuble": 3.3,
					"meuble": [
						27.2,
						32.6,
						19
					],
					"secteur": "11",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						24,
						28.8,
						16.8
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.4,
						32.9,
						19.2
					],
					"secteur": "11",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						24.1,
						28.9,
						16.9
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.5,
						33,
						19.3
					],
					"secteur": "11",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						21.4,
						25.7,
						15
					],
					"majorationMeuble": 3,
					"meuble": [
						24.4,
						29.3,
						17.1
					],
					"secteur": "11",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						21.1,
						25.3,
						14.8
					],
					"majorationMeuble": 3,
					"meuble": [
						24.1,
						28.9,
						16.9
					],
					"secteur": "11",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						33.1,
						39.7,
						23.2
					],
					"majorationMeuble": 4.6,
					"meuble": [
						37.7,
						45.2,
						26.4
					],
					"secteur": "12",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						27,
						32.4,
						18.9
					],
					"majorationMeuble": 3.8,
					"meuble": [
						30.8,
						37,
						21.6
					],
					"secteur": "12",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						30.4,
						36.5,
						21.3
					],
					"majorationMeuble": 4.3,
					"meuble": [
						34.7,
						41.6,
						24.3
					],
					"secteur": "12",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						31,
						37.2,
						21.7
					],
					"majorationMeuble": 4.3,
					"meuble": [
						35.3,
						42.4,
						24.7
					],
					"secteur": "12",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						27.9,
						33.5,
						19.5
					],
					"majorationMeuble": 3.9,
					"meuble": [
						31.8,
						38.2,
						22.3
					],
					"secteur": "12",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						24.8,
						29.8,
						17.4
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.3,
						34,
						19.8
					],
					"secteur": "12",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						23.9,
						28.7,
						16.7
					],
					"majorationMeuble": 3.3,
					"meuble": [
						27.2,
						32.6,
						19
					],
					"secteur": "12",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						27,
						32.4,
						18.9
					],
					"majorationMeuble": 3.8,
					"meuble": [
						30.8,
						37,
						21.6
					],
					"secteur": "12",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						25.8,
						31,
						18.1
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.4,
						35.3,
						20.6
					],
					"secteur": "12",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						21.9,
						26.3,
						15.3
					],
					"majorationMeuble": 3.1,
					"meuble": [
						25,
						30,
						17.5
					],
					"secteur": "12",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						22.9,
						27.5,
						16
					],
					"majorationMeuble": 3.2,
					"meuble": [
						26.1,
						31.3,
						18.3
					],
					"secteur": "12",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						23.9,
						28.7,
						16.7
					],
					"majorationMeuble": 3.3,
					"meuble": [
						27.2,
						32.6,
						19
					],
					"secteur": "12",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						21,
						25.2,
						14.7
					],
					"majorationMeuble": 2.9,
					"meuble": [
						23.9,
						28.7,
						16.7
					],
					"secteur": "12",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						20.4,
						24.5,
						14.3
					],
					"majorationMeuble": 2.9,
					"meuble": [
						23.3,
						28,
						16.3
					],
					"secteur": "12",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						24,
						28.8,
						16.8
					],
					"majorationMeuble": 3.4,
					"meuble": [
						27.4,
						32.9,
						19.2
					],
					"secteur": "12",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						23.4,
						28.1,
						16.4
					],
					"majorationMeuble": 3.3,
					"meuble": [
						26.7,
						32,
						18.7
					],
					"secteur": "12",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						29.6,
						35.5,
						20.7
					],
					"majorationMeuble": 4.1,
					"meuble": [
						33.7,
						40.4,
						23.6
					],
					"secteur": "13",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						27.2,
						32.6,
						19
					],
					"majorationMeuble": 3.8,
					"meuble": [
						31,
						37.2,
						21.7
					],
					"secteur": "13",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						22.8,
						27.4,
						16
					],
					"majorationMeuble": 3.2,
					"meuble": [
						26,
						31.2,
						18.2
					],
					"secteur": "13",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						25.3,
						30.4,
						17.7
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.8,
						34.6,
						20.2
					],
					"secteur": "13",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						24.9,
						29.9,
						17.4
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.4,
						34.1,
						19.9
					],
					"secteur": "13",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						21.8,
						26.2,
						15.3
					],
					"majorationMeuble": 3.1,
					"meuble": [
						24.9,
						29.9,
						17.4
					],
					"secteur": "13",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						21,
						25.2,
						14.7
					],
					"majorationMeuble": 2.9,
					"meuble": [
						23.9,
						28.7,
						16.7
					],
					"secteur": "13",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						23,
						27.6,
						16.1
					],
					"majorationMeuble": 3.2,
					"meuble": [
						26.2,
						31.4,
						18.3
					],
					"secteur": "13",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						22.7,
						27.2,
						15.9
					],
					"majorationMeuble": 3.2,
					"meuble": [
						25.9,
						31.1,
						18.1
					],
					"secteur": "13",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						19.2,
						23,
						13.4
					],
					"majorationMeuble": 2.7,
					"meuble": [
						21.9,
						26.3,
						15.3
					],
					"secteur": "13",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.7,
						20,
						11.7
					],
					"majorationMeuble": 2.3,
					"meuble": [
						19,
						22.8,
						13.3
					],
					"secteur": "13",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						20.8,
						25,
						14.6
					],
					"majorationMeuble": 2.9,
					"meuble": [
						23.7,
						28.4,
						16.6
					],
					"secteur": "13",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						21.4,
						25.7,
						15
					],
					"majorationMeuble": 3,
					"meuble": [
						24.4,
						29.3,
						17.1
					],
					"secteur": "13",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						17.5,
						21,
						12.3
					],
					"majorationMeuble": 2.5,
					"meuble": [
						20,
						24,
						14
					],
					"secteur": "13",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						15.1,
						18.1,
						10.6
					],
					"majorationMeuble": 2.1,
					"meuble": [
						17.2,
						20.6,
						12
					],
					"secteur": "13",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						20.1,
						24.1,
						14.1
					],
					"majorationMeuble": 2.8,
					"meuble": [
						22.9,
						27.5,
						16
					],
					"secteur": "13",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						27.4,
						32.9,
						19.2
					],
					"majorationMeuble": 3.8,
					"meuble": [
						31.2,
						37.4,
						21.8
					],
					"secteur": "14",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						27.2,
						32.6,
						19
					],
					"majorationMeuble": 3.8,
					"meuble": [
						31,
						37.2,
						21.7
					],
					"secteur": "14",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						24.9,
						29.9,
						17.4
					],
					"majorationMeuble": 3.5,
					"meuble": [
						28.4,
						34.1,
						19.9
					],
					"secteur": "14",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						28.6,
						34.3,
						20
					],
					"majorationMeuble": 4,
					"meuble": [
						32.6,
						39.1,
						22.8
					],
					"secteur": "14",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						25.5,
						30.6,
						17.9
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.1,
						34.9,
						20.4
					],
					"secteur": "14",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						23.3,
						28,
						16.3
					],
					"majorationMeuble": 3.3,
					"meuble": [
						26.6,
						31.9,
						18.6
					],
					"secteur": "14",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						23.1,
						27.7,
						16.2
					],
					"majorationMeuble": 3.2,
					"meuble": [
						26.3,
						31.6,
						18.4
					],
					"secteur": "14",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						25.5,
						30.6,
						17.9
					],
					"majorationMeuble": 3.6,
					"meuble": [
						29.1,
						34.9,
						20.4
					],
					"secteur": "14",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						23.4,
						28.1,
						16.4
					],
					"majorationMeuble": 3.3,
					"meuble": [
						26.7,
						32,
						18.7
					],
					"secteur": "14",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						21.3,
						25.6,
						14.9
					],
					"majorationMeuble": 3,
					"meuble": [
						24.3,
						29.2,
						17
					],
					"secteur": "14",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						21.7,
						26,
						15.2
					],
					"majorationMeuble": 3,
					"meuble": [
						24.7,
						29.6,
						17.3
					],
					"secteur": "14",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						22.5,
						27,
						15.8
					],
					"majorationMeuble": 3.2,
					"meuble": [
						25.7,
						30.8,
						18
					],
					"secteur": "14",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						21.1,
						25.3,
						14.8
					],
					"majorationMeuble": 3,
					"meuble": [
						24.1,
						28.9,
						16.9
					],
					"secteur": "14",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						20.2,
						24.2,
						14.1
					],
					"majorationMeuble": 2.8,
					"meuble": [
						23,
						27.6,
						16.1
					],
					"secteur": "14",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						18.1,
						21.7,
						12.7
					],
					"majorationMeuble": 2.5,
					"meuble": [
						20.6,
						24.7,
						14.4
					],
					"secteur": "14",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						22.5,
						27,
						15.8
					],
					"majorationMeuble": 3.2,
					"meuble": [
						25.7,
						30.8,
						18
					],
					"secteur": "14",
					"pieces": 4
				}
			]
		}
	},
	{
		id: "plaine-commune",
		nom: "Plaine Commune",
		arrete: {
			"numero": "IDF-2026-04-28-00033",
			"signeLe": "2026-04-28",
			"valideDu": "2026-06-01",
			"valideJusquau": "2026-11-24",
			"url": "https://www.drihl.ile-de-france.developpement-durable.gouv.fr/IMG/pdf/arrete_pco-2.pdf",
			"page": "https://www.drihl.ile-de-france.developpement-durable.gouv.fr/arrete-2026-fixant-les-loyers-de-reference-les-a1505.html"
		},
		genereLe: "2026-11-12",
		communes: [
			{
				"insee": "93001",
				"nom": "Aubervilliers",
				"secteur": "314",
				"couverture": "totale"
			},
			{
				"insee": "93031",
				"nom": "Épinay-sur-Seine",
				"secteur": "315",
				"couverture": "totale"
			},
			{
				"insee": "93039",
				"nom": "L'Île-Saint-Denis",
				"secteur": "312",
				"couverture": "totale"
			},
			{
				"insee": "93027",
				"nom": "La Courneuve",
				"secteur": "316",
				"couverture": "totale"
			},
			{
				"insee": "93066",
				"nom": "Saint-Denis",
				"secteurs": [
					"311",
					"312",
					"317"
				],
				"anciennesCommunes": [{
					"insee": "93059",
					"nom": "Pierrefitte-sur-Seine",
					"secteur": "317"
				}],
				"noteSecteur": "Saint-Denis infra 1 = 311, infra 2 = 312 (carte en annexe 5), commune déléguée de Pierrefitte-sur-Seine = 317.",
				"couverture": "totale"
			},
			{
				"insee": "93070",
				"nom": "Saint-Ouen-sur-Seine",
				"secteur": "310",
				"couverture": "totale"
			},
			{
				"insee": "93072",
				"nom": "Stains",
				"secteur": "318",
				"couverture": "totale"
			},
			{
				"insee": "93079",
				"nom": "Villetaneuse",
				"secteur": "316",
				"couverture": "totale"
			}
		],
		zonage: {
			"maille": "secteur",
			"resolution": "Un secteur par commune (annexe 1), sauf Saint-Denis : infra 1 (311) ou infra 2 (312) selon la carte de l'annexe 5, et 317 pour l'ancienne commune de Pierrefitte (BAN : oldcitycode 93059).",
			"geodonnees": "https://www.drihl.ile-de-france.developpement-durable.gouv.fr/arrete-2026-fixant-les-loyers-de-reference-les-a1505.html"
		},
		donnees: {
			"epoques": [
				{
					"cle": "avant-1946",
					"libelle": "avant 1946",
					"de": null,
					"a": 1945
				},
				{
					"cle": "1946-1970",
					"libelle": "1946-1970",
					"de": 1946,
					"a": 1970
				},
				{
					"cle": "1971-1990",
					"libelle": "1971-1990",
					"de": 1971,
					"a": 1990
				},
				{
					"cle": "apres-1990",
					"libelle": "après 1990",
					"de": 1991,
					"a": null
				}
			],
			"source": {
				"url": "https://www.drihl.ile-de-france.developpement-durable.gouv.fr/IMG/pdf/arrete_pco-2.pdf",
				"methode": "Annexes 2 à 4 du PDF de l'arrêté (texte).",
				"recupereLe": "2026-11-12"
			},
			"lignes": [
				{
					"epoque": "avant-1946",
					"vide": [
						23,
						27.6,
						16.1
					],
					"majorationMeuble": .7,
					"meuble": [
						23.7,
						28.4,
						16.6
					],
					"secteur": "311",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						22.8,
						27.4,
						16
					],
					"majorationMeuble": .7,
					"meuble": [
						23.5,
						28.2,
						16.5
					],
					"secteur": "311",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19.8,
						23.8,
						13.9
					],
					"majorationMeuble": .6,
					"meuble": [
						20.4,
						24.5,
						14.3
					],
					"secteur": "311",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						21.1,
						25.3,
						14.8
					],
					"majorationMeuble": .6,
					"meuble": [
						21.7,
						26,
						15.2
					],
					"secteur": "311",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						19.7,
						23.6,
						13.8
					],
					"majorationMeuble": .6,
					"meuble": [
						20.3,
						24.4,
						14.2
					],
					"secteur": "311",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						15.5,
						18.6,
						10.9
					],
					"majorationMeuble": .5,
					"meuble": [
						16,
						19.2,
						11.2
					],
					"secteur": "311",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						15.6,
						18.7,
						10.9
					],
					"majorationMeuble": .5,
					"meuble": [
						16.1,
						19.3,
						11.3
					],
					"secteur": "311",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						17.6,
						21.1,
						12.3
					],
					"majorationMeuble": .5,
					"meuble": [
						18.1,
						21.7,
						12.7
					],
					"secteur": "311",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						15.8,
						19,
						11.1
					],
					"majorationMeuble": .5,
					"meuble": [
						16.3,
						19.6,
						11.4
					],
					"secteur": "311",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14.1,
						16.9,
						9.9
					],
					"majorationMeuble": .4,
					"meuble": [
						14.5,
						17.4,
						10.2
					],
					"secteur": "311",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						14.2,
						17,
						9.9
					],
					"majorationMeuble": .4,
					"meuble": [
						14.6,
						17.5,
						10.2
					],
					"secteur": "311",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						15.5,
						18.6,
						10.9
					],
					"majorationMeuble": .5,
					"meuble": [
						16,
						19.2,
						11.2
					],
					"secteur": "311",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						12.8,
						15.4,
						9
					],
					"majorationMeuble": .4,
					"meuble": [
						13.2,
						15.8,
						9.2
					],
					"secteur": "311",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.3,
						14.8,
						8.6
					],
					"majorationMeuble": .4,
					"meuble": [
						12.7,
						15.2,
						8.9
					],
					"secteur": "311",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						10.7,
						12.8,
						7.5
					],
					"majorationMeuble": .3,
					"meuble": [
						11,
						13.2,
						7.7
					],
					"secteur": "311",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						13.8,
						16.6,
						9.7
					],
					"majorationMeuble": .4,
					"meuble": [
						14.2,
						17,
						9.9
					],
					"secteur": "311",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						22.1,
						26.5,
						15.5
					],
					"majorationMeuble": .7,
					"meuble": [
						22.8,
						27.4,
						16
					],
					"secteur": "312",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						21,
						25.2,
						14.7
					],
					"majorationMeuble": .6,
					"meuble": [
						21.6,
						25.9,
						15.1
					],
					"secteur": "312",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19.9,
						23.9,
						13.9
					],
					"majorationMeuble": .6,
					"meuble": [
						20.5,
						24.6,
						14.4
					],
					"secteur": "312",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						19.1,
						22.9,
						13.4
					],
					"majorationMeuble": .6,
					"meuble": [
						19.7,
						23.6,
						13.8
					],
					"secteur": "312",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						17.5,
						21,
						12.3
					],
					"majorationMeuble": .5,
					"meuble": [
						18,
						21.6,
						12.6
					],
					"secteur": "312",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						17.1,
						20.5,
						12
					],
					"majorationMeuble": .5,
					"meuble": [
						17.6,
						21.1,
						12.3
					],
					"secteur": "312",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.3,
						19.6,
						11.4
					],
					"majorationMeuble": .5,
					"meuble": [
						16.8,
						20.2,
						11.8
					],
					"secteur": "312",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.6,
						19.9,
						11.6
					],
					"majorationMeuble": .5,
					"meuble": [
						17.1,
						20.5,
						12
					],
					"secteur": "312",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.4,
						17.3,
						10.1
					],
					"majorationMeuble": .4,
					"meuble": [
						14.8,
						17.8,
						10.4
					],
					"secteur": "312",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.1,
						14.5,
						8.5
					],
					"majorationMeuble": .4,
					"meuble": [
						12.5,
						15,
						8.8
					],
					"secteur": "312",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.7,
						15.2,
						8.9
					],
					"majorationMeuble": .4,
					"meuble": [
						13.1,
						15.7,
						9.2
					],
					"secteur": "312",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						14.4,
						17.3,
						10.1
					],
					"majorationMeuble": .4,
					"meuble": [
						14.8,
						17.8,
						10.4
					],
					"secteur": "312",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": .4,
					"meuble": [
						12.6,
						15.1,
						8.8
					],
					"secteur": "312",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						10.9,
						13.1,
						7.6
					],
					"majorationMeuble": .3,
					"meuble": [
						11.2,
						13.4,
						7.8
					],
					"secteur": "312",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						11.8,
						14.2,
						8.3
					],
					"majorationMeuble": .4,
					"meuble": [
						12.2,
						14.6,
						8.5
					],
					"secteur": "312",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": .4,
					"meuble": [
						13.3,
						16,
						9.3
					],
					"secteur": "312",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						23.1,
						27.7,
						16.2
					],
					"majorationMeuble": .7,
					"meuble": [
						23.8,
						28.6,
						16.7
					],
					"secteur": "314",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						21.9,
						26.3,
						15.3
					],
					"majorationMeuble": .7,
					"meuble": [
						22.6,
						27.1,
						15.8
					],
					"secteur": "314",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19.6,
						23.5,
						13.7
					],
					"majorationMeuble": .6,
					"meuble": [
						20.2,
						24.2,
						14.1
					],
					"secteur": "314",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						20,
						24,
						14
					],
					"majorationMeuble": .6,
					"meuble": [
						20.6,
						24.7,
						14.4
					],
					"secteur": "314",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						18.7,
						22.4,
						13.1
					],
					"majorationMeuble": .6,
					"meuble": [
						19.3,
						23.2,
						13.5
					],
					"secteur": "314",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14.8,
						17.8,
						10.4
					],
					"majorationMeuble": .4,
					"meuble": [
						15.2,
						18.2,
						10.6
					],
					"secteur": "314",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.2,
						19.4,
						11.3
					],
					"majorationMeuble": .5,
					"meuble": [
						16.7,
						20,
						11.7
					],
					"secteur": "314",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						17.2,
						20.6,
						12
					],
					"majorationMeuble": .5,
					"meuble": [
						17.7,
						21.2,
						12.4
					],
					"secteur": "314",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.7,
						17.6,
						10.3
					],
					"majorationMeuble": .4,
					"meuble": [
						15.1,
						18.1,
						10.6
					],
					"secteur": "314",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12,
						14.4,
						8.4
					],
					"majorationMeuble": .4,
					"meuble": [
						12.4,
						14.9,
						8.7
					],
					"secteur": "314",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						13.4,
						16.1,
						9.4
					],
					"majorationMeuble": .4,
					"meuble": [
						13.8,
						16.6,
						9.7
					],
					"secteur": "314",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						14.3,
						17.2,
						10
					],
					"majorationMeuble": .4,
					"meuble": [
						14.7,
						17.6,
						10.3
					],
					"secteur": "314",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": .3,
					"meuble": [
						11.9,
						14.3,
						8.3
					],
					"secteur": "314",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						9.3,
						11.2,
						6.5
					],
					"majorationMeuble": .3,
					"meuble": [
						9.6,
						11.5,
						6.7
					],
					"secteur": "314",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						11.1,
						13.3,
						7.8
					],
					"majorationMeuble": .3,
					"meuble": [
						11.4,
						13.7,
						8
					],
					"secteur": "314",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": .4,
					"meuble": [
						12.8,
						15.4,
						9
					],
					"secteur": "314",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						22.6,
						27.1,
						15.8
					],
					"majorationMeuble": .7,
					"meuble": [
						23.3,
						28,
						16.3
					],
					"secteur": "315",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						15.4,
						18.5,
						10.8
					],
					"majorationMeuble": .5,
					"meuble": [
						15.9,
						19.1,
						11.1
					],
					"secteur": "315",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19.1,
						22.9,
						13.4
					],
					"majorationMeuble": .6,
					"meuble": [
						19.7,
						23.6,
						13.8
					],
					"secteur": "315",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						19.4,
						23.3,
						13.6
					],
					"majorationMeuble": .6,
					"meuble": [
						20,
						24,
						14
					],
					"secteur": "315",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						17.5,
						21,
						12.3
					],
					"majorationMeuble": .5,
					"meuble": [
						18,
						21.6,
						12.6
					],
					"secteur": "315",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": .4,
					"meuble": [
						12.9,
						15.5,
						9
					],
					"secteur": "315",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.3,
						19.6,
						11.4
					],
					"majorationMeuble": .5,
					"meuble": [
						16.8,
						20.2,
						11.8
					],
					"secteur": "315",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.8,
						20.2,
						11.8
					],
					"majorationMeuble": .5,
					"meuble": [
						17.3,
						20.8,
						12.1
					],
					"secteur": "315",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						13.7,
						16.4,
						9.6
					],
					"majorationMeuble": .4,
					"meuble": [
						14.1,
						16.9,
						9.9
					],
					"secteur": "315",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": .3,
					"meuble": [
						11.3,
						13.6,
						7.9
					],
					"secteur": "315",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						14.4,
						17.3,
						10.1
					],
					"majorationMeuble": .4,
					"meuble": [
						14.8,
						17.8,
						10.4
					],
					"secteur": "315",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						14,
						16.8,
						9.8
					],
					"majorationMeuble": .4,
					"meuble": [
						14.4,
						17.3,
						10.1
					],
					"secteur": "315",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						11.3,
						13.6,
						7.9
					],
					"majorationMeuble": .3,
					"meuble": [
						11.6,
						13.9,
						8.1
					],
					"secteur": "315",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						9.9,
						11.9,
						6.9
					],
					"majorationMeuble": .3,
					"meuble": [
						10.2,
						12.2,
						7.1
					],
					"secteur": "315",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": .3,
					"meuble": [
						11.3,
						13.6,
						7.9
					],
					"secteur": "315",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						13,
						15.6,
						9.1
					],
					"majorationMeuble": .4,
					"meuble": [
						13.4,
						16.1,
						9.4
					],
					"secteur": "315",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						21.8,
						26.2,
						15.3
					],
					"majorationMeuble": .7,
					"meuble": [
						22.5,
						27,
						15.8
					],
					"secteur": "316",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						18.7,
						22.4,
						13.1
					],
					"majorationMeuble": .6,
					"meuble": [
						19.3,
						23.2,
						13.5
					],
					"secteur": "316",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19.6,
						23.5,
						13.7
					],
					"majorationMeuble": .6,
					"meuble": [
						20.2,
						24.2,
						14.1
					],
					"secteur": "316",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						20.1,
						24.1,
						14.1
					],
					"majorationMeuble": .6,
					"meuble": [
						20.7,
						24.8,
						14.5
					],
					"secteur": "316",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						18,
						21.6,
						12.6
					],
					"majorationMeuble": .5,
					"meuble": [
						18.5,
						22.2,
						13
					],
					"secteur": "316",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14,
						16.8,
						9.8
					],
					"majorationMeuble": .4,
					"meuble": [
						14.4,
						17.3,
						10.1
					],
					"secteur": "316",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.1,
						19.3,
						11.3
					],
					"majorationMeuble": .5,
					"meuble": [
						16.6,
						19.9,
						11.6
					],
					"secteur": "316",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.3,
						19.6,
						11.4
					],
					"majorationMeuble": .5,
					"meuble": [
						16.8,
						20.2,
						11.8
					],
					"secteur": "316",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.5,
						17.4,
						10.2
					],
					"majorationMeuble": .4,
					"meuble": [
						14.9,
						17.9,
						10.4
					],
					"secteur": "316",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						10.8,
						13,
						7.6
					],
					"majorationMeuble": .3,
					"meuble": [
						11.1,
						13.3,
						7.8
					],
					"secteur": "316",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						13.2,
						15.8,
						9.2
					],
					"majorationMeuble": .4,
					"meuble": [
						13.6,
						16.3,
						9.5
					],
					"secteur": "316",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						14,
						16.8,
						9.8
					],
					"majorationMeuble": .4,
					"meuble": [
						14.4,
						17.3,
						10.1
					],
					"secteur": "316",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						12.1,
						14.5,
						8.5
					],
					"majorationMeuble": .4,
					"meuble": [
						12.5,
						15,
						8.8
					],
					"secteur": "316",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						8.3,
						10,
						5.8
					],
					"majorationMeuble": .2,
					"meuble": [
						8.5,
						10.2,
						6
					],
					"secteur": "316",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						10.5,
						12.6,
						7.4
					],
					"majorationMeuble": .3,
					"meuble": [
						10.8,
						13,
						7.6
					],
					"secteur": "316",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						11.9,
						14.3,
						8.3
					],
					"majorationMeuble": .4,
					"meuble": [
						12.3,
						14.8,
						8.6
					],
					"secteur": "316",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						19.2,
						23,
						13.4
					],
					"majorationMeuble": .9,
					"meuble": [
						20.1,
						24.1,
						14.1
					],
					"secteur": "317",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						17.3,
						20.8,
						12.1
					],
					"majorationMeuble": .8,
					"meuble": [
						18.1,
						21.7,
						12.7
					],
					"secteur": "317",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19.1,
						22.9,
						13.4
					],
					"majorationMeuble": .9,
					"meuble": [
						20,
						24,
						14
					],
					"secteur": "317",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						18.6,
						22.3,
						13
					],
					"majorationMeuble": .9,
					"meuble": [
						19.5,
						23.4,
						13.7
					],
					"secteur": "317",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						16.7,
						20,
						11.7
					],
					"majorationMeuble": .8,
					"meuble": [
						17.5,
						21,
						12.3
					],
					"secteur": "317",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						15.1,
						18.1,
						10.6
					],
					"majorationMeuble": .7,
					"meuble": [
						15.8,
						19,
						11.1
					],
					"secteur": "317",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						14.3,
						17.2,
						10
					],
					"majorationMeuble": .7,
					"meuble": [
						15,
						18,
						10.5
					],
					"secteur": "317",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.1,
						19.3,
						11.3
					],
					"majorationMeuble": .8,
					"meuble": [
						16.9,
						20.3,
						11.8
					],
					"secteur": "317",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						12.6,
						15.1,
						8.8
					],
					"majorationMeuble": .6,
					"meuble": [
						13.2,
						15.8,
						9.2
					],
					"secteur": "317",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						13,
						15.6,
						9.1
					],
					"majorationMeuble": .6,
					"meuble": [
						13.6,
						16.3,
						9.5
					],
					"secteur": "317",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.6,
						15.1,
						8.8
					],
					"majorationMeuble": .6,
					"meuble": [
						13.2,
						15.8,
						9.2
					],
					"secteur": "317",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						13.6,
						16.3,
						9.5
					],
					"majorationMeuble": .6,
					"meuble": [
						14.2,
						17,
						9.9
					],
					"secteur": "317",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						11.1,
						13.3,
						7.8
					],
					"majorationMeuble": .5,
					"meuble": [
						11.6,
						13.9,
						8.1
					],
					"secteur": "317",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						10.4,
						12.5,
						7.3
					],
					"majorationMeuble": .5,
					"meuble": [
						10.9,
						13.1,
						7.6
					],
					"secteur": "317",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						11.1,
						13.3,
						7.8
					],
					"majorationMeuble": .5,
					"meuble": [
						11.6,
						13.9,
						8.1
					],
					"secteur": "317",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						11.9,
						14.3,
						8.3
					],
					"majorationMeuble": .6,
					"meuble": [
						12.5,
						15,
						8.8
					],
					"secteur": "317",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						19.2,
						23,
						13.4
					],
					"majorationMeuble": .9,
					"meuble": [
						20.1,
						24.1,
						14.1
					],
					"secteur": "318",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						19.2,
						23,
						13.4
					],
					"majorationMeuble": .9,
					"meuble": [
						20.1,
						24.1,
						14.1
					],
					"secteur": "318",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						18,
						21.6,
						12.6
					],
					"majorationMeuble": .8,
					"meuble": [
						18.8,
						22.6,
						13.2
					],
					"secteur": "318",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						19.7,
						23.6,
						13.8
					],
					"majorationMeuble": .9,
					"meuble": [
						20.6,
						24.7,
						14.4
					],
					"secteur": "318",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						15.7,
						18.8,
						11
					],
					"majorationMeuble": .7,
					"meuble": [
						16.4,
						19.7,
						11.5
					],
					"secteur": "318",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						15.2,
						18.2,
						10.6
					],
					"majorationMeuble": .7,
					"meuble": [
						15.9,
						19.1,
						11.1
					],
					"secteur": "318",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.1,
						19.3,
						11.3
					],
					"majorationMeuble": .8,
					"meuble": [
						16.9,
						20.3,
						11.8
					],
					"secteur": "318",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.2,
						19.4,
						11.3
					],
					"majorationMeuble": .8,
					"meuble": [
						17,
						20.4,
						11.9
					],
					"secteur": "318",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						13.4,
						16.1,
						9.4
					],
					"majorationMeuble": .6,
					"meuble": [
						14,
						16.8,
						9.8
					],
					"secteur": "318",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11.8,
						14.2,
						8.3
					],
					"majorationMeuble": .6,
					"meuble": [
						12.4,
						14.9,
						8.7
					],
					"secteur": "318",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						13.3,
						16,
						9.3
					],
					"majorationMeuble": .6,
					"meuble": [
						13.9,
						16.7,
						9.7
					],
					"secteur": "318",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						13.8,
						16.6,
						9.7
					],
					"majorationMeuble": .6,
					"meuble": [
						14.4,
						17.3,
						10.1
					],
					"secteur": "318",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": .5,
					"meuble": [
						11.7,
						14,
						8.2
					],
					"secteur": "318",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						10.1,
						12.1,
						7.1
					],
					"majorationMeuble": .5,
					"meuble": [
						10.6,
						12.7,
						7.4
					],
					"secteur": "318",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": .5,
					"meuble": [
						11.7,
						14,
						8.2
					],
					"secteur": "318",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						11.3,
						13.6,
						7.9
					],
					"majorationMeuble": .5,
					"meuble": [
						11.8,
						14.2,
						8.3
					],
					"secteur": "318",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						26.8,
						32.2,
						18.8
					],
					"majorationMeuble": .8,
					"meuble": [
						27.6,
						33.1,
						19.3
					],
					"secteur": "311",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						26.6,
						31.9,
						18.6
					],
					"majorationMeuble": .8,
					"meuble": [
						27.4,
						32.9,
						19.2
					],
					"secteur": "311",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						23.1,
						27.7,
						16.2
					],
					"majorationMeuble": .7,
					"meuble": [
						23.8,
						28.6,
						16.7
					],
					"secteur": "311",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						24.6,
						29.5,
						17.2
					],
					"majorationMeuble": .7,
					"meuble": [
						25.3,
						30.4,
						17.7
					],
					"secteur": "311",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						23,
						27.6,
						16.1
					],
					"majorationMeuble": .7,
					"meuble": [
						23.7,
						28.4,
						16.6
					],
					"secteur": "311",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						18.1,
						21.7,
						12.7
					],
					"majorationMeuble": .5,
					"meuble": [
						18.6,
						22.3,
						13
					],
					"secteur": "311",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						18.2,
						21.8,
						12.7
					],
					"majorationMeuble": .5,
					"meuble": [
						18.7,
						22.4,
						13.1
					],
					"secteur": "311",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						20.5,
						24.6,
						14.4
					],
					"majorationMeuble": .6,
					"meuble": [
						21.1,
						25.3,
						14.8
					],
					"secteur": "311",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						18.4,
						22.1,
						12.9
					],
					"majorationMeuble": .6,
					"meuble": [
						19,
						22.8,
						13.3
					],
					"secteur": "311",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						16.4,
						19.7,
						11.5
					],
					"majorationMeuble": .5,
					"meuble": [
						16.9,
						20.3,
						11.8
					],
					"secteur": "311",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.5,
						19.8,
						11.6
					],
					"majorationMeuble": .5,
					"meuble": [
						17,
						20.4,
						11.9
					],
					"secteur": "311",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						18.1,
						21.7,
						12.7
					],
					"majorationMeuble": .5,
					"meuble": [
						18.6,
						22.3,
						13
					],
					"secteur": "311",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.9,
						17.9,
						10.4
					],
					"majorationMeuble": .4,
					"meuble": [
						15.3,
						18.4,
						10.7
					],
					"secteur": "311",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14.3,
						17.2,
						10
					],
					"majorationMeuble": .4,
					"meuble": [
						14.7,
						17.6,
						10.3
					],
					"secteur": "311",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": .4,
					"meuble": [
						12.9,
						15.5,
						9
					],
					"secteur": "311",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.1,
						19.3,
						11.3
					],
					"majorationMeuble": .5,
					"meuble": [
						16.6,
						19.9,
						11.6
					],
					"secteur": "311",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						25.7,
						30.8,
						18
					],
					"majorationMeuble": .8,
					"meuble": [
						26.5,
						31.8,
						18.6
					],
					"secteur": "312",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						24.5,
						29.4,
						17.2
					],
					"majorationMeuble": .7,
					"meuble": [
						25.2,
						30.2,
						17.6
					],
					"secteur": "312",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						23.2,
						27.8,
						16.2
					],
					"majorationMeuble": .7,
					"meuble": [
						23.9,
						28.7,
						16.7
					],
					"secteur": "312",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						22.3,
						26.8,
						15.6
					],
					"majorationMeuble": .7,
					"meuble": [
						23,
						27.6,
						16.1
					],
					"secteur": "312",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						20.4,
						24.5,
						14.3
					],
					"majorationMeuble": .6,
					"meuble": [
						21,
						25.2,
						14.7
					],
					"secteur": "312",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						19.9,
						23.9,
						13.9
					],
					"majorationMeuble": .6,
					"meuble": [
						20.5,
						24.6,
						14.4
					],
					"secteur": "312",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19,
						22.8,
						13.3
					],
					"majorationMeuble": .6,
					"meuble": [
						19.6,
						23.5,
						13.7
					],
					"secteur": "312",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						19.3,
						23.2,
						13.5
					],
					"majorationMeuble": .6,
					"meuble": [
						19.9,
						23.9,
						13.9
					],
					"secteur": "312",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						16.8,
						20.2,
						11.8
					],
					"majorationMeuble": .5,
					"meuble": [
						17.3,
						20.8,
						12.1
					],
					"secteur": "312",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14.1,
						16.9,
						9.9
					],
					"majorationMeuble": .4,
					"meuble": [
						14.5,
						17.4,
						10.2
					],
					"secteur": "312",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						14.8,
						17.8,
						10.4
					],
					"majorationMeuble": .4,
					"meuble": [
						15.2,
						18.2,
						10.6
					],
					"secteur": "312",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.8,
						20.2,
						11.8
					],
					"majorationMeuble": .5,
					"meuble": [
						17.3,
						20.8,
						12.1
					],
					"secteur": "312",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.2,
						17,
						9.9
					],
					"majorationMeuble": .4,
					"meuble": [
						14.6,
						17.5,
						10.2
					],
					"secteur": "312",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.7,
						15.2,
						8.9
					],
					"majorationMeuble": .4,
					"meuble": [
						13.1,
						15.7,
						9.2
					],
					"secteur": "312",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						13.7,
						16.4,
						9.6
					],
					"majorationMeuble": .4,
					"meuble": [
						14.1,
						16.9,
						9.9
					],
					"secteur": "312",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						15,
						18,
						10.5
					],
					"majorationMeuble": .5,
					"meuble": [
						15.5,
						18.6,
						10.9
					],
					"secteur": "312",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						26.9,
						32.3,
						18.8
					],
					"majorationMeuble": .8,
					"meuble": [
						27.7,
						33.2,
						19.4
					],
					"secteur": "314",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						25.5,
						30.6,
						17.9
					],
					"majorationMeuble": .8,
					"meuble": [
						26.3,
						31.6,
						18.4
					],
					"secteur": "314",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						22.8,
						27.4,
						16
					],
					"majorationMeuble": .7,
					"meuble": [
						23.5,
						28.2,
						16.5
					],
					"secteur": "314",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						23.3,
						28,
						16.3
					],
					"majorationMeuble": .7,
					"meuble": [
						24,
						28.8,
						16.8
					],
					"secteur": "314",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						21.8,
						26.2,
						15.3
					],
					"majorationMeuble": .7,
					"meuble": [
						22.5,
						27,
						15.8
					],
					"secteur": "314",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						17.2,
						20.6,
						12
					],
					"majorationMeuble": .5,
					"meuble": [
						17.7,
						21.2,
						12.4
					],
					"secteur": "314",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						18.9,
						22.7,
						13.2
					],
					"majorationMeuble": .6,
					"meuble": [
						19.5,
						23.4,
						13.7
					],
					"secteur": "314",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						20,
						24,
						14
					],
					"majorationMeuble": .6,
					"meuble": [
						20.6,
						24.7,
						14.4
					],
					"secteur": "314",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						17.1,
						20.5,
						12
					],
					"majorationMeuble": .5,
					"meuble": [
						17.6,
						21.1,
						12.3
					],
					"secteur": "314",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14,
						16.8,
						9.8
					],
					"majorationMeuble": .4,
					"meuble": [
						14.4,
						17.3,
						10.1
					],
					"secteur": "314",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						15.6,
						18.7,
						10.9
					],
					"majorationMeuble": .5,
					"meuble": [
						16.1,
						19.3,
						11.3
					],
					"secteur": "314",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.7,
						20,
						11.7
					],
					"majorationMeuble": .5,
					"meuble": [
						17.2,
						20.6,
						12
					],
					"secteur": "314",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						13.5,
						16.2,
						9.5
					],
					"majorationMeuble": .4,
					"meuble": [
						13.9,
						16.7,
						9.7
					],
					"secteur": "314",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						10.8,
						13,
						7.6
					],
					"majorationMeuble": .3,
					"meuble": [
						11.1,
						13.3,
						7.8
					],
					"secteur": "314",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": .4,
					"meuble": [
						13.3,
						16,
						9.3
					],
					"secteur": "314",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						14.4,
						17.3,
						10.1
					],
					"majorationMeuble": .4,
					"meuble": [
						14.8,
						17.8,
						10.4
					],
					"secteur": "314",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						26.3,
						31.6,
						18.4
					],
					"majorationMeuble": .8,
					"meuble": [
						27.1,
						32.5,
						19
					],
					"secteur": "315",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						17.9,
						21.5,
						12.5
					],
					"majorationMeuble": .5,
					"meuble": [
						18.4,
						22.1,
						12.9
					],
					"secteur": "315",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						22.3,
						26.8,
						15.6
					],
					"majorationMeuble": .7,
					"meuble": [
						23,
						27.6,
						16.1
					],
					"secteur": "315",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						22.6,
						27.1,
						15.8
					],
					"majorationMeuble": .7,
					"meuble": [
						23.3,
						28,
						16.3
					],
					"secteur": "315",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						20.4,
						24.5,
						14.3
					],
					"majorationMeuble": .6,
					"meuble": [
						21,
						25.2,
						14.7
					],
					"secteur": "315",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14.6,
						17.5,
						10.2
					],
					"majorationMeuble": .4,
					"meuble": [
						15,
						18,
						10.5
					],
					"secteur": "315",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19,
						22.8,
						13.3
					],
					"majorationMeuble": .6,
					"meuble": [
						19.6,
						23.5,
						13.7
					],
					"secteur": "315",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						19.6,
						23.5,
						13.7
					],
					"majorationMeuble": .6,
					"meuble": [
						20.2,
						24.2,
						14.1
					],
					"secteur": "315",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						16,
						19.2,
						11.2
					],
					"majorationMeuble": .5,
					"meuble": [
						16.5,
						19.8,
						11.6
					],
					"secteur": "315",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.8,
						15.4,
						9
					],
					"majorationMeuble": .4,
					"meuble": [
						13.2,
						15.8,
						9.2
					],
					"secteur": "315",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.8,
						20.2,
						11.8
					],
					"majorationMeuble": .5,
					"meuble": [
						17.3,
						20.8,
						12.1
					],
					"secteur": "315",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.3,
						19.6,
						11.4
					],
					"majorationMeuble": .5,
					"meuble": [
						16.8,
						20.2,
						11.8
					],
					"secteur": "315",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						13.2,
						15.8,
						9.2
					],
					"majorationMeuble": .4,
					"meuble": [
						13.6,
						16.3,
						9.5
					],
					"secteur": "315",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11.5,
						13.8,
						8.1
					],
					"majorationMeuble": .3,
					"meuble": [
						11.8,
						14.2,
						8.3
					],
					"secteur": "315",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.8,
						15.4,
						9
					],
					"majorationMeuble": .4,
					"meuble": [
						13.2,
						15.8,
						9.2
					],
					"secteur": "315",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						15.1,
						18.1,
						10.6
					],
					"majorationMeuble": .5,
					"meuble": [
						15.6,
						18.7,
						10.9
					],
					"secteur": "315",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						25.4,
						30.5,
						17.8
					],
					"majorationMeuble": .8,
					"meuble": [
						26.2,
						31.4,
						18.3
					],
					"secteur": "316",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						21.8,
						26.2,
						15.3
					],
					"majorationMeuble": .7,
					"meuble": [
						22.5,
						27,
						15.8
					],
					"secteur": "316",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						22.8,
						27.4,
						16
					],
					"majorationMeuble": .7,
					"meuble": [
						23.5,
						28.2,
						16.5
					],
					"secteur": "316",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						23.4,
						28.1,
						16.4
					],
					"majorationMeuble": .7,
					"meuble": [
						24.1,
						28.9,
						16.9
					],
					"secteur": "316",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						21,
						25.2,
						14.7
					],
					"majorationMeuble": .6,
					"meuble": [
						21.6,
						25.9,
						15.1
					],
					"secteur": "316",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						16.3,
						19.6,
						11.4
					],
					"majorationMeuble": .5,
					"meuble": [
						16.8,
						20.2,
						11.8
					],
					"secteur": "316",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						18.8,
						22.6,
						13.2
					],
					"majorationMeuble": .6,
					"meuble": [
						19.4,
						23.3,
						13.6
					],
					"secteur": "316",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						19,
						22.8,
						13.3
					],
					"majorationMeuble": .6,
					"meuble": [
						19.6,
						23.5,
						13.7
					],
					"secteur": "316",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						16.9,
						20.3,
						11.8
					],
					"majorationMeuble": .5,
					"meuble": [
						17.4,
						20.9,
						12.2
					],
					"secteur": "316",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.6,
						15.1,
						8.8
					],
					"majorationMeuble": .4,
					"meuble": [
						13,
						15.6,
						9.1
					],
					"secteur": "316",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						15.4,
						18.5,
						10.8
					],
					"majorationMeuble": .5,
					"meuble": [
						15.9,
						19.1,
						11.1
					],
					"secteur": "316",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.3,
						19.6,
						11.4
					],
					"majorationMeuble": .5,
					"meuble": [
						16.8,
						20.2,
						11.8
					],
					"secteur": "316",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.1,
						16.9,
						9.9
					],
					"majorationMeuble": .4,
					"meuble": [
						14.5,
						17.4,
						10.2
					],
					"secteur": "316",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						9.7,
						11.6,
						6.8
					],
					"majorationMeuble": .3,
					"meuble": [
						10,
						12,
						7
					],
					"secteur": "316",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": .4,
					"meuble": [
						12.6,
						15.1,
						8.8
					],
					"secteur": "316",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						13.9,
						16.7,
						9.7
					],
					"majorationMeuble": .4,
					"meuble": [
						14.3,
						17.2,
						10
					],
					"secteur": "316",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						22.4,
						26.9,
						15.7
					],
					"majorationMeuble": 1.1,
					"meuble": [
						23.5,
						28.2,
						16.5
					],
					"secteur": "317",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						20.2,
						24.2,
						14.1
					],
					"majorationMeuble": .9,
					"meuble": [
						21.1,
						25.3,
						14.8
					],
					"secteur": "317",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						22.3,
						26.8,
						15.6
					],
					"majorationMeuble": 1,
					"meuble": [
						23.3,
						28,
						16.3
					],
					"secteur": "317",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						21.7,
						26,
						15.2
					],
					"majorationMeuble": 1,
					"meuble": [
						22.7,
						27.2,
						15.9
					],
					"secteur": "317",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						19.5,
						23.4,
						13.7
					],
					"majorationMeuble": .9,
					"meuble": [
						20.4,
						24.5,
						14.3
					],
					"secteur": "317",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						17.6,
						21.1,
						12.3
					],
					"majorationMeuble": .8,
					"meuble": [
						18.4,
						22.1,
						12.9
					],
					"secteur": "317",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.7,
						20,
						11.7
					],
					"majorationMeuble": .8,
					"meuble": [
						17.5,
						21,
						12.3
					],
					"secteur": "317",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						18.8,
						22.6,
						13.2
					],
					"majorationMeuble": .9,
					"meuble": [
						19.7,
						23.6,
						13.8
					],
					"secteur": "317",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.7,
						17.6,
						10.3
					],
					"majorationMeuble": .7,
					"meuble": [
						15.4,
						18.5,
						10.8
					],
					"secteur": "317",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						15.1,
						18.1,
						10.6
					],
					"majorationMeuble": .7,
					"meuble": [
						15.8,
						19,
						11.1
					],
					"secteur": "317",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						14.7,
						17.6,
						10.3
					],
					"majorationMeuble": .7,
					"meuble": [
						15.4,
						18.5,
						10.8
					],
					"secteur": "317",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						15.8,
						19,
						11.1
					],
					"majorationMeuble": .7,
					"meuble": [
						16.5,
						19.8,
						11.6
					],
					"secteur": "317",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": .6,
					"meuble": [
						13.5,
						16.2,
						9.5
					],
					"secteur": "317",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.1,
						14.5,
						8.5
					],
					"majorationMeuble": .6,
					"meuble": [
						12.7,
						15.2,
						8.9
					],
					"secteur": "317",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": .6,
					"meuble": [
						13.5,
						16.2,
						9.5
					],
					"secteur": "317",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						13.9,
						16.7,
						9.7
					],
					"majorationMeuble": .7,
					"meuble": [
						14.6,
						17.5,
						10.2
					],
					"secteur": "317",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						21.4,
						25.7,
						15
					],
					"majorationMeuble": 1,
					"meuble": [
						22.4,
						26.9,
						15.7
					],
					"secteur": "318",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						21.4,
						25.7,
						15
					],
					"majorationMeuble": 1,
					"meuble": [
						22.4,
						26.9,
						15.7
					],
					"secteur": "318",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						20.1,
						24.1,
						14.1
					],
					"majorationMeuble": .9,
					"meuble": [
						21,
						25.2,
						14.7
					],
					"secteur": "318",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						21.9,
						26.3,
						15.3
					],
					"majorationMeuble": 1,
					"meuble": [
						22.9,
						27.5,
						16
					],
					"secteur": "318",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						17.5,
						21,
						12.3
					],
					"majorationMeuble": .8,
					"meuble": [
						18.3,
						22,
						12.8
					],
					"secteur": "318",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						16.9,
						20.3,
						11.8
					],
					"majorationMeuble": .8,
					"meuble": [
						17.7,
						21.2,
						12.4
					],
					"secteur": "318",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						17.9,
						21.5,
						12.5
					],
					"majorationMeuble": .8,
					"meuble": [
						18.7,
						22.4,
						13.1
					],
					"secteur": "318",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						18,
						21.6,
						12.6
					],
					"majorationMeuble": .8,
					"meuble": [
						18.8,
						22.6,
						13.2
					],
					"secteur": "318",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.9,
						17.9,
						10.4
					],
					"majorationMeuble": .7,
					"meuble": [
						15.6,
						18.7,
						10.9
					],
					"secteur": "318",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						13.1,
						15.7,
						9.2
					],
					"majorationMeuble": .6,
					"meuble": [
						13.7,
						16.4,
						9.6
					],
					"secteur": "318",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						14.8,
						17.8,
						10.4
					],
					"majorationMeuble": .7,
					"meuble": [
						15.5,
						18.6,
						10.9
					],
					"secteur": "318",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						15.4,
						18.5,
						10.8
					],
					"majorationMeuble": .7,
					"meuble": [
						16.1,
						19.3,
						11.3
					],
					"secteur": "318",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": .6,
					"meuble": [
						13.1,
						15.7,
						9.2
					],
					"secteur": "318",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11.3,
						13.6,
						7.9
					],
					"majorationMeuble": .5,
					"meuble": [
						11.8,
						14.2,
						8.3
					],
					"secteur": "318",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": .6,
					"meuble": [
						13.1,
						15.7,
						9.2
					],
					"secteur": "318",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						12.6,
						15.1,
						8.8
					],
					"majorationMeuble": .6,
					"meuble": [
						13.2,
						15.8,
						9.2
					],
					"secteur": "318",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						24.6,
						29.5,
						17.2
					],
					"majorationMeuble": 1.5,
					"meuble": [
						26.1,
						31.3,
						18.3
					],
					"secteur": "310",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						20.1,
						24.1,
						14.1
					],
					"majorationMeuble": 1.2,
					"meuble": [
						21.3,
						25.6,
						14.9
					],
					"secteur": "310",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19.9,
						23.9,
						13.9
					],
					"majorationMeuble": 1.2,
					"meuble": [
						21.1,
						25.3,
						14.8
					],
					"secteur": "310",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						22.5,
						27,
						15.8
					],
					"majorationMeuble": 1.3,
					"meuble": [
						23.8,
						28.6,
						16.7
					],
					"secteur": "310",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						20.5,
						24.6,
						14.4
					],
					"majorationMeuble": 1.2,
					"meuble": [
						21.7,
						26,
						15.2
					],
					"secteur": "310",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						17.3,
						20.8,
						12.1
					],
					"majorationMeuble": 1,
					"meuble": [
						18.3,
						22,
						12.8
					],
					"secteur": "310",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						17.8,
						21.4,
						12.5
					],
					"majorationMeuble": 1.1,
					"meuble": [
						18.9,
						22.7,
						13.2
					],
					"secteur": "310",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						18.9,
						22.7,
						13.2
					],
					"majorationMeuble": 1.1,
					"meuble": [
						20,
						24,
						14
					],
					"secteur": "310",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						16.9,
						20.3,
						11.8
					],
					"majorationMeuble": 1,
					"meuble": [
						17.9,
						21.5,
						12.5
					],
					"secteur": "310",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						13.3,
						16,
						9.3
					],
					"majorationMeuble": .8,
					"meuble": [
						14.1,
						16.9,
						9.9
					],
					"secteur": "310",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						15.3,
						18.4,
						10.7
					],
					"majorationMeuble": .9,
					"meuble": [
						16.2,
						19.4,
						11.3
					],
					"secteur": "310",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.4,
						19.7,
						11.5
					],
					"majorationMeuble": 1,
					"meuble": [
						17.4,
						20.9,
						12.2
					],
					"secteur": "310",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						15.1,
						18.1,
						10.6
					],
					"majorationMeuble": .9,
					"meuble": [
						16,
						19.2,
						11.2
					],
					"secteur": "310",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": .7,
					"meuble": [
						12.9,
						15.5,
						9
					],
					"secteur": "310",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						13.1,
						15.7,
						9.2
					],
					"majorationMeuble": .8,
					"meuble": [
						13.9,
						16.7,
						9.7
					],
					"secteur": "310",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						15.1,
						18.1,
						10.6
					],
					"majorationMeuble": .9,
					"meuble": [
						16,
						19.2,
						11.2
					],
					"secteur": "310",
					"pieces": 4
				}
			]
		}
	},
	{
		id: "est-ensemble",
		nom: "Est Ensemble",
		arrete: {
			"numero": "IDF-2026-04-28-00032",
			"signeLe": "2026-04-28",
			"valideDu": "2026-06-01",
			"valideJusquau": "2026-11-24",
			"url": "https://www.drihl.ile-de-france.developpement-durable.gouv.fr/IMG/pdf/arrete_ee-2.pdf",
			"page": "https://www.drihl.ile-de-france.developpement-durable.gouv.fr/arrete-2026-fixant-les-loyers-de-reference-les-a1506.html"
		},
		genereLe: "2026-11-12",
		communes: [
			{
				"insee": "93006",
				"nom": "Bagnolet",
				"secteur": "308",
				"couverture": "totale"
			},
			{
				"insee": "93008",
				"nom": "Bobigny",
				"secteur": "315",
				"couverture": "totale"
			},
			{
				"insee": "93010",
				"nom": "Bondy",
				"secteur": "318",
				"couverture": "totale"
			},
			{
				"insee": "93061",
				"nom": "Le Pré-Saint-Gervais",
				"secteur": "308",
				"couverture": "totale"
			},
			{
				"insee": "93045",
				"nom": "Les Lilas",
				"secteur": "307",
				"couverture": "totale"
			},
			{
				"insee": "93048",
				"nom": "Montreuil",
				"secteurs": ["307", "308"],
				"noteSecteur": "Montreuil infra 1 = 307, infra 2 = 308 (carte en annexe 5).",
				"couverture": "totale"
			},
			{
				"insee": "93053",
				"nom": "Noisy-le-Sec",
				"secteur": "311",
				"couverture": "totale"
			},
			{
				"insee": "93055",
				"nom": "Pantin",
				"secteur": "308",
				"couverture": "totale"
			},
			{
				"insee": "93063",
				"nom": "Romainville",
				"secteur": "313",
				"couverture": "totale"
			}
		],
		zonage: {
			"maille": "secteur",
			"resolution": "Un secteur par commune (annexe 1), sauf Montreuil : infra 1 (307) ou infra 2 (308) selon la carte de l'annexe 5.",
			"geodonnees": "https://www.drihl.ile-de-france.developpement-durable.gouv.fr/arrete-2026-fixant-les-loyers-de-reference-les-a1506.html"
		},
		donnees: {
			"epoques": [
				{
					"cle": "avant-1946",
					"libelle": "avant 1946",
					"de": null,
					"a": 1945
				},
				{
					"cle": "1946-1970",
					"libelle": "1946-1970",
					"de": 1946,
					"a": 1970
				},
				{
					"cle": "1971-1990",
					"libelle": "1971-1990",
					"de": 1971,
					"a": 1990
				},
				{
					"cle": "apres-1990",
					"libelle": "après 1990",
					"de": 1991,
					"a": null
				}
			],
			"source": {
				"url": "https://www.drihl.ile-de-france.developpement-durable.gouv.fr/IMG/pdf/arrete_ee-2.pdf",
				"methode": "Annexes 2 à 4 du PDF de l'arrêté (texte).",
				"recupereLe": "2026-11-12"
			},
			"lignes": [
				{
					"epoque": "avant-1946",
					"vide": [
						23,
						27.6,
						16.1
					],
					"majorationMeuble": .7,
					"meuble": [
						23.7,
						28.4,
						16.6
					],
					"secteur": "311",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						22.8,
						27.4,
						16
					],
					"majorationMeuble": .7,
					"meuble": [
						23.5,
						28.2,
						16.5
					],
					"secteur": "311",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19.8,
						23.8,
						13.9
					],
					"majorationMeuble": .6,
					"meuble": [
						20.4,
						24.5,
						14.3
					],
					"secteur": "311",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						21.1,
						25.3,
						14.8
					],
					"majorationMeuble": .6,
					"meuble": [
						21.7,
						26,
						15.2
					],
					"secteur": "311",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						19.7,
						23.6,
						13.8
					],
					"majorationMeuble": .6,
					"meuble": [
						20.3,
						24.4,
						14.2
					],
					"secteur": "311",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						15.5,
						18.6,
						10.9
					],
					"majorationMeuble": .5,
					"meuble": [
						16,
						19.2,
						11.2
					],
					"secteur": "311",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						15.6,
						18.7,
						10.9
					],
					"majorationMeuble": .5,
					"meuble": [
						16.1,
						19.3,
						11.3
					],
					"secteur": "311",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						17.6,
						21.1,
						12.3
					],
					"majorationMeuble": .5,
					"meuble": [
						18.1,
						21.7,
						12.7
					],
					"secteur": "311",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						15.8,
						19,
						11.1
					],
					"majorationMeuble": .5,
					"meuble": [
						16.3,
						19.6,
						11.4
					],
					"secteur": "311",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14.1,
						16.9,
						9.9
					],
					"majorationMeuble": .4,
					"meuble": [
						14.5,
						17.4,
						10.2
					],
					"secteur": "311",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						14.2,
						17,
						9.9
					],
					"majorationMeuble": .4,
					"meuble": [
						14.6,
						17.5,
						10.2
					],
					"secteur": "311",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						15.5,
						18.6,
						10.9
					],
					"majorationMeuble": .5,
					"meuble": [
						16,
						19.2,
						11.2
					],
					"secteur": "311",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						12.8,
						15.4,
						9
					],
					"majorationMeuble": .4,
					"meuble": [
						13.2,
						15.8,
						9.2
					],
					"secteur": "311",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.3,
						14.8,
						8.6
					],
					"majorationMeuble": .4,
					"meuble": [
						12.7,
						15.2,
						8.9
					],
					"secteur": "311",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						10.7,
						12.8,
						7.5
					],
					"majorationMeuble": .3,
					"meuble": [
						11,
						13.2,
						7.7
					],
					"secteur": "311",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						13.8,
						16.6,
						9.7
					],
					"majorationMeuble": .4,
					"meuble": [
						14.2,
						17,
						9.9
					],
					"secteur": "311",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						20.8,
						25,
						14.6
					],
					"majorationMeuble": .6,
					"meuble": [
						21.4,
						25.7,
						15
					],
					"secteur": "313",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						19.1,
						22.9,
						13.4
					],
					"majorationMeuble": .6,
					"meuble": [
						19.7,
						23.6,
						13.8
					],
					"secteur": "313",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19.1,
						22.9,
						13.4
					],
					"majorationMeuble": .6,
					"meuble": [
						19.7,
						23.6,
						13.8
					],
					"secteur": "313",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						20.9,
						25.1,
						14.6
					],
					"majorationMeuble": .6,
					"meuble": [
						21.5,
						25.8,
						15.1
					],
					"secteur": "313",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						17.3,
						20.8,
						12.1
					],
					"majorationMeuble": .5,
					"meuble": [
						17.8,
						21.4,
						12.5
					],
					"secteur": "313",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.6,
						15.1,
						8.8
					],
					"majorationMeuble": .4,
					"meuble": [
						13,
						15.6,
						9.1
					],
					"secteur": "313",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						15.3,
						18.4,
						10.7
					],
					"majorationMeuble": .5,
					"meuble": [
						15.8,
						19,
						11.1
					],
					"secteur": "313",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.9,
						20.3,
						11.8
					],
					"majorationMeuble": .5,
					"meuble": [
						17.4,
						20.9,
						12.2
					],
					"secteur": "313",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.3,
						17.2,
						10
					],
					"majorationMeuble": .4,
					"meuble": [
						14.7,
						17.6,
						10.3
					],
					"secteur": "313",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.1,
						14.5,
						8.5
					],
					"majorationMeuble": .4,
					"meuble": [
						12.5,
						15,
						8.8
					],
					"secteur": "313",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.7,
						15.2,
						8.9
					],
					"majorationMeuble": .4,
					"meuble": [
						13.1,
						15.7,
						9.2
					],
					"secteur": "313",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						15.4,
						18.5,
						10.8
					],
					"majorationMeuble": .5,
					"meuble": [
						15.9,
						19.1,
						11.1
					],
					"secteur": "313",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14,
						16.8,
						9.8
					],
					"majorationMeuble": .4,
					"meuble": [
						14.4,
						17.3,
						10.1
					],
					"secteur": "313",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						9.7,
						11.6,
						6.8
					],
					"majorationMeuble": .3,
					"meuble": [
						10,
						12,
						7
					],
					"secteur": "313",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						9.6,
						11.5,
						6.7
					],
					"majorationMeuble": .3,
					"meuble": [
						9.9,
						11.9,
						6.9
					],
					"secteur": "313",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						13.7,
						16.4,
						9.6
					],
					"majorationMeuble": .4,
					"meuble": [
						14.1,
						16.9,
						9.9
					],
					"secteur": "313",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						22.6,
						27.1,
						15.8
					],
					"majorationMeuble": .7,
					"meuble": [
						23.3,
						28,
						16.3
					],
					"secteur": "315",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						15.4,
						18.5,
						10.8
					],
					"majorationMeuble": .5,
					"meuble": [
						15.9,
						19.1,
						11.1
					],
					"secteur": "315",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19.1,
						22.9,
						13.4
					],
					"majorationMeuble": .6,
					"meuble": [
						19.7,
						23.6,
						13.8
					],
					"secteur": "315",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						19.4,
						23.3,
						13.6
					],
					"majorationMeuble": .6,
					"meuble": [
						20,
						24,
						14
					],
					"secteur": "315",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						17.5,
						21,
						12.3
					],
					"majorationMeuble": .5,
					"meuble": [
						18,
						21.6,
						12.6
					],
					"secteur": "315",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": .4,
					"meuble": [
						12.9,
						15.5,
						9
					],
					"secteur": "315",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.3,
						19.6,
						11.4
					],
					"majorationMeuble": .5,
					"meuble": [
						16.8,
						20.2,
						11.8
					],
					"secteur": "315",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.8,
						20.2,
						11.8
					],
					"majorationMeuble": .5,
					"meuble": [
						17.3,
						20.8,
						12.1
					],
					"secteur": "315",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						13.7,
						16.4,
						9.6
					],
					"majorationMeuble": .4,
					"meuble": [
						14.1,
						16.9,
						9.9
					],
					"secteur": "315",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": .3,
					"meuble": [
						11.3,
						13.6,
						7.9
					],
					"secteur": "315",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						14.4,
						17.3,
						10.1
					],
					"majorationMeuble": .4,
					"meuble": [
						14.8,
						17.8,
						10.4
					],
					"secteur": "315",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						14,
						16.8,
						9.8
					],
					"majorationMeuble": .4,
					"meuble": [
						14.4,
						17.3,
						10.1
					],
					"secteur": "315",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						11.3,
						13.6,
						7.9
					],
					"majorationMeuble": .3,
					"meuble": [
						11.6,
						13.9,
						8.1
					],
					"secteur": "315",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						9.9,
						11.9,
						6.9
					],
					"majorationMeuble": .3,
					"meuble": [
						10.2,
						12.2,
						7.1
					],
					"secteur": "315",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": .3,
					"meuble": [
						11.3,
						13.6,
						7.9
					],
					"secteur": "315",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						13,
						15.6,
						9.1
					],
					"majorationMeuble": .4,
					"meuble": [
						13.4,
						16.1,
						9.4
					],
					"secteur": "315",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						19.2,
						23,
						13.4
					],
					"majorationMeuble": .9,
					"meuble": [
						20.1,
						24.1,
						14.1
					],
					"secteur": "318",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						19.2,
						23,
						13.4
					],
					"majorationMeuble": .9,
					"meuble": [
						20.1,
						24.1,
						14.1
					],
					"secteur": "318",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						18,
						21.6,
						12.6
					],
					"majorationMeuble": .8,
					"meuble": [
						18.8,
						22.6,
						13.2
					],
					"secteur": "318",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						19.7,
						23.6,
						13.8
					],
					"majorationMeuble": .9,
					"meuble": [
						20.6,
						24.7,
						14.4
					],
					"secteur": "318",
					"pieces": 1,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						15.7,
						18.8,
						11
					],
					"majorationMeuble": .7,
					"meuble": [
						16.4,
						19.7,
						11.5
					],
					"secteur": "318",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						15.2,
						18.2,
						10.6
					],
					"majorationMeuble": .7,
					"meuble": [
						15.9,
						19.1,
						11.1
					],
					"secteur": "318",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.1,
						19.3,
						11.3
					],
					"majorationMeuble": .8,
					"meuble": [
						16.9,
						20.3,
						11.8
					],
					"secteur": "318",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.2,
						19.4,
						11.3
					],
					"majorationMeuble": .8,
					"meuble": [
						17,
						20.4,
						11.9
					],
					"secteur": "318",
					"pieces": 2,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						13.4,
						16.1,
						9.4
					],
					"majorationMeuble": .6,
					"meuble": [
						14,
						16.8,
						9.8
					],
					"secteur": "318",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11.8,
						14.2,
						8.3
					],
					"majorationMeuble": .6,
					"meuble": [
						12.4,
						14.9,
						8.7
					],
					"secteur": "318",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						13.3,
						16,
						9.3
					],
					"majorationMeuble": .6,
					"meuble": [
						13.9,
						16.7,
						9.7
					],
					"secteur": "318",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						13.8,
						16.6,
						9.7
					],
					"majorationMeuble": .6,
					"meuble": [
						14.4,
						17.3,
						10.1
					],
					"secteur": "318",
					"pieces": 3,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": .5,
					"meuble": [
						11.7,
						14,
						8.2
					],
					"secteur": "318",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						10.1,
						12.1,
						7.1
					],
					"majorationMeuble": .5,
					"meuble": [
						10.6,
						12.7,
						7.4
					],
					"secteur": "318",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": .5,
					"meuble": [
						11.7,
						14,
						8.2
					],
					"secteur": "318",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						11.3,
						13.6,
						7.9
					],
					"majorationMeuble": .5,
					"meuble": [
						11.8,
						14.2,
						8.3
					],
					"secteur": "318",
					"pieces": 4,
					"type": "appartement"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						26.8,
						32.2,
						18.8
					],
					"majorationMeuble": .8,
					"meuble": [
						27.6,
						33.1,
						19.3
					],
					"secteur": "311",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						26.6,
						31.9,
						18.6
					],
					"majorationMeuble": .8,
					"meuble": [
						27.4,
						32.9,
						19.2
					],
					"secteur": "311",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						23.1,
						27.7,
						16.2
					],
					"majorationMeuble": .7,
					"meuble": [
						23.8,
						28.6,
						16.7
					],
					"secteur": "311",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						24.6,
						29.5,
						17.2
					],
					"majorationMeuble": .7,
					"meuble": [
						25.3,
						30.4,
						17.7
					],
					"secteur": "311",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						23,
						27.6,
						16.1
					],
					"majorationMeuble": .7,
					"meuble": [
						23.7,
						28.4,
						16.6
					],
					"secteur": "311",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						18.1,
						21.7,
						12.7
					],
					"majorationMeuble": .5,
					"meuble": [
						18.6,
						22.3,
						13
					],
					"secteur": "311",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						18.2,
						21.8,
						12.7
					],
					"majorationMeuble": .5,
					"meuble": [
						18.7,
						22.4,
						13.1
					],
					"secteur": "311",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						20.5,
						24.6,
						14.4
					],
					"majorationMeuble": .6,
					"meuble": [
						21.1,
						25.3,
						14.8
					],
					"secteur": "311",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						18.4,
						22.1,
						12.9
					],
					"majorationMeuble": .6,
					"meuble": [
						19,
						22.8,
						13.3
					],
					"secteur": "311",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						16.4,
						19.7,
						11.5
					],
					"majorationMeuble": .5,
					"meuble": [
						16.9,
						20.3,
						11.8
					],
					"secteur": "311",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.5,
						19.8,
						11.6
					],
					"majorationMeuble": .5,
					"meuble": [
						17,
						20.4,
						11.9
					],
					"secteur": "311",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						18.1,
						21.7,
						12.7
					],
					"majorationMeuble": .5,
					"meuble": [
						18.6,
						22.3,
						13
					],
					"secteur": "311",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.9,
						17.9,
						10.4
					],
					"majorationMeuble": .4,
					"meuble": [
						15.3,
						18.4,
						10.7
					],
					"secteur": "311",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14.3,
						17.2,
						10
					],
					"majorationMeuble": .4,
					"meuble": [
						14.7,
						17.6,
						10.3
					],
					"secteur": "311",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": .4,
					"meuble": [
						12.9,
						15.5,
						9
					],
					"secteur": "311",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.1,
						19.3,
						11.3
					],
					"majorationMeuble": .5,
					"meuble": [
						16.6,
						19.9,
						11.6
					],
					"secteur": "311",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						24.2,
						29,
						16.9
					],
					"majorationMeuble": .7,
					"meuble": [
						24.9,
						29.9,
						17.4
					],
					"secteur": "313",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						22.3,
						26.8,
						15.6
					],
					"majorationMeuble": .7,
					"meuble": [
						23,
						27.6,
						16.1
					],
					"secteur": "313",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						22.3,
						26.8,
						15.6
					],
					"majorationMeuble": .7,
					"meuble": [
						23,
						27.6,
						16.1
					],
					"secteur": "313",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						24.3,
						29.2,
						17
					],
					"majorationMeuble": .7,
					"meuble": [
						25,
						30,
						17.5
					],
					"secteur": "313",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						20.2,
						24.2,
						14.1
					],
					"majorationMeuble": .6,
					"meuble": [
						20.8,
						25,
						14.6
					],
					"secteur": "313",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14.7,
						17.6,
						10.3
					],
					"majorationMeuble": .4,
					"meuble": [
						15.1,
						18.1,
						10.6
					],
					"secteur": "313",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						17.8,
						21.4,
						12.5
					],
					"majorationMeuble": .5,
					"meuble": [
						18.3,
						22,
						12.8
					],
					"secteur": "313",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						19.7,
						23.6,
						13.8
					],
					"majorationMeuble": .6,
					"meuble": [
						20.3,
						24.4,
						14.2
					],
					"secteur": "313",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						16.7,
						20,
						11.7
					],
					"majorationMeuble": .5,
					"meuble": [
						17.2,
						20.6,
						12
					],
					"secteur": "313",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14.1,
						16.9,
						9.9
					],
					"majorationMeuble": .4,
					"meuble": [
						14.5,
						17.4,
						10.2
					],
					"secteur": "313",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						14.8,
						17.8,
						10.4
					],
					"majorationMeuble": .4,
					"meuble": [
						15.2,
						18.2,
						10.6
					],
					"secteur": "313",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						17.9,
						21.5,
						12.5
					],
					"majorationMeuble": .5,
					"meuble": [
						18.4,
						22.1,
						12.9
					],
					"secteur": "313",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						16.3,
						19.6,
						11.4
					],
					"majorationMeuble": .5,
					"meuble": [
						16.8,
						20.2,
						11.8
					],
					"secteur": "313",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11.3,
						13.6,
						7.9
					],
					"majorationMeuble": .3,
					"meuble": [
						11.6,
						13.9,
						8.1
					],
					"secteur": "313",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": .3,
					"meuble": [
						11.5,
						13.8,
						8.1
					],
					"secteur": "313",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16,
						19.2,
						11.2
					],
					"majorationMeuble": .5,
					"meuble": [
						16.5,
						19.8,
						11.6
					],
					"secteur": "313",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						26.3,
						31.6,
						18.4
					],
					"majorationMeuble": .8,
					"meuble": [
						27.1,
						32.5,
						19
					],
					"secteur": "315",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						17.9,
						21.5,
						12.5
					],
					"majorationMeuble": .5,
					"meuble": [
						18.4,
						22.1,
						12.9
					],
					"secteur": "315",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						22.3,
						26.8,
						15.6
					],
					"majorationMeuble": .7,
					"meuble": [
						23,
						27.6,
						16.1
					],
					"secteur": "315",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						22.6,
						27.1,
						15.8
					],
					"majorationMeuble": .7,
					"meuble": [
						23.3,
						28,
						16.3
					],
					"secteur": "315",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						20.4,
						24.5,
						14.3
					],
					"majorationMeuble": .6,
					"meuble": [
						21,
						25.2,
						14.7
					],
					"secteur": "315",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14.6,
						17.5,
						10.2
					],
					"majorationMeuble": .4,
					"meuble": [
						15,
						18,
						10.5
					],
					"secteur": "315",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						19,
						22.8,
						13.3
					],
					"majorationMeuble": .6,
					"meuble": [
						19.6,
						23.5,
						13.7
					],
					"secteur": "315",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						19.6,
						23.5,
						13.7
					],
					"majorationMeuble": .6,
					"meuble": [
						20.2,
						24.2,
						14.1
					],
					"secteur": "315",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						16,
						19.2,
						11.2
					],
					"majorationMeuble": .5,
					"meuble": [
						16.5,
						19.8,
						11.6
					],
					"secteur": "315",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.8,
						15.4,
						9
					],
					"majorationMeuble": .4,
					"meuble": [
						13.2,
						15.8,
						9.2
					],
					"secteur": "315",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.8,
						20.2,
						11.8
					],
					"majorationMeuble": .5,
					"meuble": [
						17.3,
						20.8,
						12.1
					],
					"secteur": "315",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.3,
						19.6,
						11.4
					],
					"majorationMeuble": .5,
					"meuble": [
						16.8,
						20.2,
						11.8
					],
					"secteur": "315",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						13.2,
						15.8,
						9.2
					],
					"majorationMeuble": .4,
					"meuble": [
						13.6,
						16.3,
						9.5
					],
					"secteur": "315",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11.5,
						13.8,
						8.1
					],
					"majorationMeuble": .3,
					"meuble": [
						11.8,
						14.2,
						8.3
					],
					"secteur": "315",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.8,
						15.4,
						9
					],
					"majorationMeuble": .4,
					"meuble": [
						13.2,
						15.8,
						9.2
					],
					"secteur": "315",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						15.1,
						18.1,
						10.6
					],
					"majorationMeuble": .5,
					"meuble": [
						15.6,
						18.7,
						10.9
					],
					"secteur": "315",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						21.4,
						25.7,
						15
					],
					"majorationMeuble": 1,
					"meuble": [
						22.4,
						26.9,
						15.7
					],
					"secteur": "318",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						21.4,
						25.7,
						15
					],
					"majorationMeuble": 1,
					"meuble": [
						22.4,
						26.9,
						15.7
					],
					"secteur": "318",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						20.1,
						24.1,
						14.1
					],
					"majorationMeuble": .9,
					"meuble": [
						21,
						25.2,
						14.7
					],
					"secteur": "318",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						21.9,
						26.3,
						15.3
					],
					"majorationMeuble": 1,
					"meuble": [
						22.9,
						27.5,
						16
					],
					"secteur": "318",
					"pieces": 1,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						17.5,
						21,
						12.3
					],
					"majorationMeuble": .8,
					"meuble": [
						18.3,
						22,
						12.8
					],
					"secteur": "318",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						16.9,
						20.3,
						11.8
					],
					"majorationMeuble": .8,
					"meuble": [
						17.7,
						21.2,
						12.4
					],
					"secteur": "318",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						17.9,
						21.5,
						12.5
					],
					"majorationMeuble": .8,
					"meuble": [
						18.7,
						22.4,
						13.1
					],
					"secteur": "318",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						18,
						21.6,
						12.6
					],
					"majorationMeuble": .8,
					"meuble": [
						18.8,
						22.6,
						13.2
					],
					"secteur": "318",
					"pieces": 2,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.9,
						17.9,
						10.4
					],
					"majorationMeuble": .7,
					"meuble": [
						15.6,
						18.7,
						10.9
					],
					"secteur": "318",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						13.1,
						15.7,
						9.2
					],
					"majorationMeuble": .6,
					"meuble": [
						13.7,
						16.4,
						9.6
					],
					"secteur": "318",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						14.8,
						17.8,
						10.4
					],
					"majorationMeuble": .7,
					"meuble": [
						15.5,
						18.6,
						10.9
					],
					"secteur": "318",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						15.4,
						18.5,
						10.8
					],
					"majorationMeuble": .7,
					"meuble": [
						16.1,
						19.3,
						11.3
					],
					"secteur": "318",
					"pieces": 3,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": .6,
					"meuble": [
						13.1,
						15.7,
						9.2
					],
					"secteur": "318",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11.3,
						13.6,
						7.9
					],
					"majorationMeuble": .5,
					"meuble": [
						11.8,
						14.2,
						8.3
					],
					"secteur": "318",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": .6,
					"meuble": [
						13.1,
						15.7,
						9.2
					],
					"secteur": "318",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "apres-1990",
					"vide": [
						12.6,
						15.1,
						8.8
					],
					"majorationMeuble": .6,
					"meuble": [
						13.2,
						15.8,
						9.2
					],
					"secteur": "318",
					"pieces": 4,
					"type": "maison"
				},
				{
					"epoque": "avant-1946",
					"vide": [
						25.1,
						30.1,
						17.6
					],
					"majorationMeuble": 2.4,
					"meuble": [
						27.5,
						33,
						19.3
					],
					"secteur": "307",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						23.7,
						28.4,
						16.6
					],
					"majorationMeuble": 2.2,
					"meuble": [
						25.9,
						31.1,
						18.1
					],
					"secteur": "307",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						24.2,
						29,
						16.9
					],
					"majorationMeuble": 2.3,
					"meuble": [
						26.5,
						31.8,
						18.6
					],
					"secteur": "307",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						23.7,
						28.4,
						16.6
					],
					"majorationMeuble": 2.2,
					"meuble": [
						25.9,
						31.1,
						18.1
					],
					"secteur": "307",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						20.3,
						24.4,
						14.2
					],
					"majorationMeuble": 1.9,
					"meuble": [
						22.2,
						26.6,
						15.5
					],
					"secteur": "307",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						18.6,
						22.3,
						13
					],
					"majorationMeuble": 1.7,
					"meuble": [
						20.3,
						24.4,
						14.2
					],
					"secteur": "307",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						18.9,
						22.7,
						13.2
					],
					"majorationMeuble": 1.8,
					"meuble": [
						20.7,
						24.8,
						14.5
					],
					"secteur": "307",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						20.3,
						24.4,
						14.2
					],
					"majorationMeuble": 1.9,
					"meuble": [
						22.2,
						26.6,
						15.5
					],
					"secteur": "307",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						17.9,
						21.5,
						12.5
					],
					"majorationMeuble": 1.7,
					"meuble": [
						19.6,
						23.5,
						13.7
					],
					"secteur": "307",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						16,
						19.2,
						11.2
					],
					"majorationMeuble": 1.5,
					"meuble": [
						17.5,
						21,
						12.3
					],
					"secteur": "307",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						15.4,
						18.5,
						10.8
					],
					"majorationMeuble": 1.4,
					"meuble": [
						16.8,
						20.2,
						11.8
					],
					"secteur": "307",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						18.5,
						22.2,
						13
					],
					"majorationMeuble": 1.7,
					"meuble": [
						20.2,
						24.2,
						14.1
					],
					"secteur": "307",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						18.3,
						22,
						12.8
					],
					"majorationMeuble": 1.7,
					"meuble": [
						20,
						24,
						14
					],
					"secteur": "307",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14.2,
						17,
						9.9
					],
					"majorationMeuble": 1.3,
					"meuble": [
						15.5,
						18.6,
						10.9
					],
					"secteur": "307",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						14.9,
						17.9,
						10.4
					],
					"majorationMeuble": 1.4,
					"meuble": [
						16.3,
						19.6,
						11.4
					],
					"secteur": "307",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						17.7,
						21.2,
						12.4
					],
					"majorationMeuble": 1.7,
					"meuble": [
						19.4,
						23.3,
						13.6
					],
					"secteur": "307",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						27.3,
						32.8,
						19.1
					],
					"majorationMeuble": 2.6,
					"meuble": [
						29.9,
						35.9,
						20.9
					],
					"secteur": "308",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						19.9,
						23.9,
						13.9
					],
					"majorationMeuble": 1.9,
					"meuble": [
						21.8,
						26.2,
						15.3
					],
					"secteur": "308",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						20.5,
						24.6,
						14.4
					],
					"majorationMeuble": 1.9,
					"meuble": [
						22.4,
						26.9,
						15.7
					],
					"secteur": "308",
					"pieces": 1
				},
				{
					"epoque": "apres-1990",
					"vide": [
						22.5,
						27,
						15.8
					],
					"majorationMeuble": 2.1,
					"meuble": [
						24.6,
						29.5,
						17.2
					],
					"secteur": "308",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						20.6,
						24.7,
						14.4
					],
					"majorationMeuble": 1.9,
					"meuble": [
						22.5,
						27,
						15.8
					],
					"secteur": "308",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						19,
						22.8,
						13.3
					],
					"majorationMeuble": 1.8,
					"meuble": [
						20.8,
						25,
						14.6
					],
					"secteur": "308",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						16.2,
						19.4,
						11.3
					],
					"majorationMeuble": 1.5,
					"meuble": [
						17.7,
						21.2,
						12.4
					],
					"secteur": "308",
					"pieces": 2
				},
				{
					"epoque": "apres-1990",
					"vide": [
						19.5,
						23.4,
						13.7
					],
					"majorationMeuble": 1.8,
					"meuble": [
						21.3,
						25.6,
						14.9
					],
					"secteur": "308",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						19,
						22.8,
						13.3
					],
					"majorationMeuble": 1.8,
					"meuble": [
						20.8,
						25,
						14.6
					],
					"secteur": "308",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						15.2,
						18.2,
						10.6
					],
					"majorationMeuble": 1.4,
					"meuble": [
						16.6,
						19.9,
						11.6
					],
					"secteur": "308",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						15,
						18,
						10.5
					],
					"majorationMeuble": 1.4,
					"meuble": [
						16.4,
						19.7,
						11.5
					],
					"secteur": "308",
					"pieces": 3
				},
				{
					"epoque": "apres-1990",
					"vide": [
						17.6,
						21.1,
						12.3
					],
					"majorationMeuble": 1.7,
					"meuble": [
						19.3,
						23.2,
						13.5
					],
					"secteur": "308",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						16.1,
						19.3,
						11.3
					],
					"majorationMeuble": 1.5,
					"meuble": [
						17.6,
						21.1,
						12.3
					],
					"secteur": "308",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						10.3,
						12.4,
						7.2
					],
					"majorationMeuble": 1,
					"meuble": [
						11.3,
						13.6,
						7.9
					],
					"secteur": "308",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.1,
						16.9,
						9.9
					],
					"secteur": "308",
					"pieces": 4
				},
				{
					"epoque": "apres-1990",
					"vide": [
						16.7,
						20,
						11.7
					],
					"majorationMeuble": 1.6,
					"meuble": [
						18.3,
						22,
						12.8
					],
					"secteur": "308",
					"pieces": 4
				}
			]
		}
	},
	{
		id: "lyon-villeurbanne",
		nom: "Lyon et Villeurbanne",
		arrete: {
			"numero": "DDT 69-2026-10-23-00004",
			"signeLe": "2026-10-23",
			"valideDu": "2026-11-01",
			"valideJusquau": "2026-11-23",
			"url": "https://www.rhone.gouv.fr/contenu/telechargement/70756/476440/file/20261023_encadrement_loyers_Lyon_Villeurbanne_global_RAA.pdf",
			"page": "https://www.rhone.gouv.fr/Actions-de-l-Etat/Amenagement-du-territoire-urbanisme-construction-logement/Logement/Encadrement-des-loyers"
		},
		genereLe: "2026-11-12",
		communes: [{
			"insee": "69123",
			"nom": "Lyon",
			"secteurs": [
				"1",
				"2",
				"3",
				"4",
				"5"
			],
			"codesArrondissements": [
				"69381",
				"69382",
				"69383",
				"69384",
				"69385",
				"69386",
				"69387",
				"69388",
				"69389"
			],
			"couverture": "totale"
		}, {
			"insee": "69266",
			"nom": "Villeurbanne",
			"secteurs": [
				"1",
				"2",
				"3",
				"4",
				"5"
			],
			"couverture": "totale"
		}],
		zonage: {
			"maille": "iris",
			"resolution": "5 secteurs, chaque IRIS de Lyon et Villeurbanne appartient à un secteur. Adresse vers secteur : géocoder avec la BAN, puis point dans polygone sur la couche WFS de la Métropole (champ codeiris, zonage).",
			"geodonnees": "https://data.grandlyon.com/geoserver/metropole-de-lyon/ows?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=metropole-de-lyon:car_care.carencadrmtloyer_2026_2027&outputFormat=application/json&SRSNAME=EPSG:4326"
		},
		iris: {
			"692660101": "4",
			"692660102": "4",
			"692660103": "4",
			"692660201": "5",
			"692660202": "3",
			"692660301": "2",
			"692660302": "4",
			"692660401": "3",
			"692660402": "4",
			"692660403": "4",
			"692660501": "3",
			"692660502": "3",
			"692660601": "4",
			"692660701": "5",
			"692660702": "4",
			"692660703": "5",
			"692660801": "5",
			"692660901": "5",
			"692660902": "3",
			"692660903": "4",
			"692661001": "3",
			"692661002": "5",
			"692661101": "3",
			"692661201": "4",
			"692661202": "4",
			"692661203": "4",
			"692661204": "4",
			"692661205": "4",
			"692661301": "4",
			"692661302": "3",
			"692661303": "5",
			"692661401": "5",
			"692661402": "4",
			"692661403": "5",
			"692661404": "4",
			"692661501": "4",
			"692661502": "4",
			"692661503": "4",
			"692661601": "4",
			"692661602": "5",
			"692661701": "4",
			"692661702": "4",
			"692661703": "5",
			"692661704": "4",
			"692661801": "5",
			"692661802": "5",
			"692661803": "4",
			"692661804": "5",
			"693810101": "1",
			"693810102": "1",
			"693810201": "2",
			"693810202": "2",
			"693810301": "2",
			"693810302": "2",
			"693810303": "1",
			"693810304": "2",
			"693810401": "1",
			"693810402": "2",
			"693810501": "1",
			"693820101": "1",
			"693820102": "1",
			"693820103": "1",
			"693820201": "1",
			"693820202": "1",
			"693820203": "1",
			"693820204": "1",
			"693820301": "1",
			"693820302": "1",
			"693820401": "1",
			"693820402": "1",
			"693820501": "3",
			"693820502": "3",
			"693820503": "2",
			"693820504": "3",
			"693830101": "1",
			"693830102": "1",
			"693830103": "2",
			"693830104": "2",
			"693830105": "2",
			"693830201": "3",
			"693830202": "2",
			"693830203": "2",
			"693830204": "2",
			"693830205": "3",
			"693830301": "2",
			"693830302": "2",
			"693830401": "4",
			"693830402": "3",
			"693830403": "3",
			"693830404": "3",
			"693830405": "3",
			"693830501": "3",
			"693830502": "3",
			"693830601": "3",
			"693830602": "5",
			"693830603": "2",
			"693830604": "3",
			"693830701": "3",
			"693830702": "3",
			"693830703": "2",
			"693830801": "2",
			"693830802": "3",
			"693830803": "3",
			"693830804": "3",
			"693830901": "3",
			"693830902": "5",
			"693840101": "1",
			"693840102": "2",
			"693840103": "2",
			"693840201": "2",
			"693840202": "2",
			"693840203": "1",
			"693840204": "1",
			"693840301": "1",
			"693840302": "2",
			"693840303": "1",
			"693840401": "2",
			"693840402": "5",
			"693840403": "2",
			"693840501": "2",
			"693840502": "2",
			"693850101": "2",
			"693850102": "1",
			"693850103": "2",
			"693850104": "2",
			"693850201": "3",
			"693850202": "5",
			"693850203": "5",
			"693850204": "2",
			"693850301": "5",
			"693850302": "5",
			"693850401": "1",
			"693850402": "3",
			"693850403": "4",
			"693850404": "4",
			"693850501": "5",
			"693850502": "5",
			"693850503": "5",
			"693850504": "5",
			"693850601": "4",
			"693850602": "5",
			"693850603": "4",
			"693860101": "1",
			"693860102": "1",
			"693860103": "1",
			"693860104": "1",
			"693860201": "1",
			"693860202": "1",
			"693860301": "1",
			"693860302": "1",
			"693860303": "1",
			"693860304": "1",
			"693860401": "1",
			"693860402": "1",
			"693860403": "1",
			"693860501": "1",
			"693860502": "1",
			"693860503": "1",
			"693860601": "1",
			"693860602": "1",
			"693860603": "2",
			"693860701": "2",
			"693860702": "3",
			"693870101": "3",
			"693870102": "2",
			"693870103": "2",
			"693870201": "3",
			"693870202": "4",
			"693870203": "2",
			"693870301": "3",
			"693870302": "3",
			"693870401": "2",
			"693870402": "3",
			"693870403": "4",
			"693870501": "2",
			"693870502": "3",
			"693870503": "5",
			"693870601": "4",
			"693870602": "4",
			"693870603": "5",
			"693870701": "3",
			"693870703": "5",
			"693870704": "4",
			"693870705": "3",
			"693870801": "4",
			"693870802": "5",
			"693870901": "5",
			"693880101": "3",
			"693880102": "2",
			"693880104": "2",
			"693880105": "3",
			"693880202": "3",
			"693880203": "2",
			"693880204": "2",
			"693880301": "3",
			"693880302": "5",
			"693880303": "4",
			"693880401": "4",
			"693880402": "5",
			"693880403": "4",
			"693880404": "5",
			"693880501": "4",
			"693880502": "5",
			"693880503": "4",
			"693880601": "5",
			"693880602": "5",
			"693880603": "5",
			"693880701": "4",
			"693880702": "5",
			"693880801": "5",
			"693880802": "4",
			"693880901": "4",
			"693880902": "4",
			"693880903": "5",
			"693890101": "5",
			"693890102": "5",
			"693890103": "5",
			"693890104": "5",
			"693890201": "4",
			"693890202": "3",
			"693890203": "4",
			"693890301": "4",
			"693890302": "4",
			"693890303": "4",
			"693890401": "5",
			"693890402": "3",
			"693890403": "4",
			"693890501": "4",
			"693890502": "4",
			"693890604": "5",
			"693890605": "5",
			"693890606": "5",
			"693890607": "5"
		},
		donnees: {
			"epoques": [
				{
					"cle": "avant-1946",
					"libelle": "avant 1946",
					"de": null,
					"a": 1945
				},
				{
					"cle": "1946-1970",
					"libelle": "1946-1970",
					"de": 1946,
					"a": 1970
				},
				{
					"cle": "1971-1990",
					"libelle": "1971-1990",
					"de": 1971,
					"a": 1990
				},
				{
					"cle": "1991-2005",
					"libelle": "1991-2005",
					"de": 1991,
					"a": 2005
				},
				{
					"cle": "apres-2005",
					"libelle": "après 2005",
					"de": 2006,
					"a": null
				}
			],
			"source": {
				"url": "https://www.rhone.gouv.fr/contenu/telechargement/70756/476440/file/20261023_encadrement_loyers_Lyon_Villeurbanne_global_RAA.pdf",
				"methode": "Annexe 1 du PDF de l'arrêté (texte), recoupée IRIS par IRIS avec l'open data de la Métropole de Lyon.",
				"recupereLe": "2026-11-12"
			},
			"lignes": [
				{
					"epoque": "avant-1946",
					"vide": [
						18,
						21.6,
						12.6
					],
					"majorationMeuble": 2.3,
					"meuble": [
						20.3,
						24.4,
						14.2
					],
					"secteur": "1",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						17.8,
						21.4,
						12.5
					],
					"majorationMeuble": 2.3,
					"meuble": [
						20.1,
						24.1,
						14.1
					],
					"secteur": "1",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						20.1,
						24.1,
						14.1
					],
					"majorationMeuble": 2.6,
					"meuble": [
						22.7,
						27.2,
						15.9
					],
					"secteur": "1",
					"pieces": 1
				},
				{
					"epoque": "1991-2005",
					"vide": [
						19.4,
						23.3,
						13.6
					],
					"majorationMeuble": 2.5,
					"meuble": [
						21.9,
						26.3,
						15.3
					],
					"secteur": "1",
					"pieces": 1
				},
				{
					"epoque": "apres-2005",
					"vide": [
						19.4,
						23.3,
						13.6
					],
					"majorationMeuble": 2.5,
					"meuble": [
						21.9,
						26.3,
						15.3
					],
					"secteur": "1",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						15.4,
						18.5,
						10.8
					],
					"majorationMeuble": 2,
					"meuble": [
						17.4,
						20.9,
						12.2
					],
					"secteur": "1",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						13.9,
						16.7,
						9.7
					],
					"majorationMeuble": 1.8,
					"meuble": [
						15.7,
						18.8,
						11
					],
					"secteur": "1",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						15.1,
						18.1,
						10.6
					],
					"majorationMeuble": 2,
					"meuble": [
						17.1,
						20.5,
						12
					],
					"secteur": "1",
					"pieces": 2
				},
				{
					"epoque": "1991-2005",
					"vide": [
						15.9,
						19.1,
						11.1
					],
					"majorationMeuble": 2.1,
					"meuble": [
						18,
						21.6,
						12.6
					],
					"secteur": "1",
					"pieces": 2
				},
				{
					"epoque": "apres-2005",
					"vide": [
						16.5,
						19.8,
						11.6
					],
					"majorationMeuble": 2.1,
					"meuble": [
						18.6,
						22.3,
						13
					],
					"secteur": "1",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						13.4,
						16.1,
						9.4
					],
					"majorationMeuble": 1.7,
					"meuble": [
						15.1,
						18.1,
						10.6
					],
					"secteur": "1",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1.7,
					"meuble": [
						14.6,
						17.5,
						10.2
					],
					"secteur": "1",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						14.3,
						17.2,
						10
					],
					"majorationMeuble": 1.9,
					"meuble": [
						16.2,
						19.4,
						11.3
					],
					"secteur": "1",
					"pieces": 3
				},
				{
					"epoque": "1991-2005",
					"vide": [
						14,
						16.8,
						9.8
					],
					"majorationMeuble": 1.8,
					"meuble": [
						15.8,
						19,
						11.1
					],
					"secteur": "1",
					"pieces": 3
				},
				{
					"epoque": "apres-2005",
					"vide": [
						14.3,
						17.2,
						10
					],
					"majorationMeuble": 1.9,
					"meuble": [
						16.2,
						19.4,
						11.3
					],
					"secteur": "1",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": 1.6,
					"meuble": [
						14,
						16.8,
						9.8
					],
					"secteur": "1",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12,
						14.4,
						8.4
					],
					"majorationMeuble": 1.6,
					"meuble": [
						13.6,
						16.3,
						9.5
					],
					"secteur": "1",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.7,
						15.2,
						8.9
					],
					"majorationMeuble": 1.7,
					"meuble": [
						14.4,
						17.3,
						10.1
					],
					"secteur": "1",
					"pieces": 4
				},
				{
					"epoque": "1991-2005",
					"vide": [
						13,
						15.6,
						9.1
					],
					"majorationMeuble": 1.7,
					"meuble": [
						14.7,
						17.6,
						10.3
					],
					"secteur": "1",
					"pieces": 4
				},
				{
					"epoque": "apres-2005",
					"vide": [
						13,
						15.6,
						9.1
					],
					"majorationMeuble": 1.7,
					"meuble": [
						14.7,
						17.6,
						10.3
					],
					"secteur": "1",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						17.8,
						21.4,
						12.5
					],
					"majorationMeuble": 2.3,
					"meuble": [
						20.1,
						24.1,
						14.1
					],
					"secteur": "2",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						17.8,
						21.4,
						12.5
					],
					"majorationMeuble": 2.3,
					"meuble": [
						20.1,
						24.1,
						14.1
					],
					"secteur": "2",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						18,
						21.6,
						12.6
					],
					"majorationMeuble": 2.3,
					"meuble": [
						20.3,
						24.4,
						14.2
					],
					"secteur": "2",
					"pieces": 1
				},
				{
					"epoque": "1991-2005",
					"vide": [
						20.3,
						24.4,
						14.2
					],
					"majorationMeuble": 2.6,
					"meuble": [
						22.9,
						27.5,
						16
					],
					"secteur": "2",
					"pieces": 1
				},
				{
					"epoque": "apres-2005",
					"vide": [
						18.2,
						21.8,
						12.7
					],
					"majorationMeuble": 2.4,
					"meuble": [
						20.6,
						24.7,
						14.4
					],
					"secteur": "2",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.4,
						17.3,
						10.1
					],
					"majorationMeuble": 1.9,
					"meuble": [
						16.3,
						19.6,
						11.4
					],
					"secteur": "2",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						13.9,
						16.7,
						9.7
					],
					"majorationMeuble": 1.8,
					"meuble": [
						15.7,
						18.8,
						11
					],
					"secteur": "2",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						13.9,
						16.7,
						9.7
					],
					"majorationMeuble": 1.8,
					"meuble": [
						15.7,
						18.8,
						11
					],
					"secteur": "2",
					"pieces": 2
				},
				{
					"epoque": "1991-2005",
					"vide": [
						14.6,
						17.5,
						10.2
					],
					"majorationMeuble": 1.9,
					"meuble": [
						16.5,
						19.8,
						11.6
					],
					"secteur": "2",
					"pieces": 2
				},
				{
					"epoque": "apres-2005",
					"vide": [
						15.7,
						18.8,
						11
					],
					"majorationMeuble": 2,
					"meuble": [
						17.7,
						21.2,
						12.4
					],
					"secteur": "2",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						12.8,
						15.4,
						9
					],
					"majorationMeuble": 1.7,
					"meuble": [
						14.5,
						17.4,
						10.2
					],
					"secteur": "2",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": 1.6,
					"meuble": [
						14,
						16.8,
						9.8
					],
					"secteur": "2",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1.7,
					"meuble": [
						14.6,
						17.5,
						10.2
					],
					"secteur": "2",
					"pieces": 3
				},
				{
					"epoque": "1991-2005",
					"vide": [
						13.5,
						16.2,
						9.5
					],
					"majorationMeuble": 1.8,
					"meuble": [
						15.3,
						18.4,
						10.7
					],
					"secteur": "2",
					"pieces": 3
				},
				{
					"epoque": "apres-2005",
					"vide": [
						13.6,
						16.3,
						9.5
					],
					"majorationMeuble": 1.8,
					"meuble": [
						15.4,
						18.5,
						10.8
					],
					"secteur": "2",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": 1.6,
					"meuble": [
						13.8,
						16.6,
						9.7
					],
					"secteur": "2",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11.9,
						14.3,
						8.3
					],
					"majorationMeuble": 1.5,
					"meuble": [
						13.4,
						16.1,
						9.4
					],
					"secteur": "2",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": 1.5,
					"meuble": [
						13.1,
						15.7,
						9.2
					],
					"secteur": "2",
					"pieces": 4
				},
				{
					"epoque": "1991-2005",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": 1.6,
					"meuble": [
						13.8,
						16.6,
						9.7
					],
					"secteur": "2",
					"pieces": 4
				},
				{
					"epoque": "apres-2005",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": 1.6,
					"meuble": [
						14.1,
						16.9,
						9.9
					],
					"secteur": "2",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						16.8,
						20.2,
						11.8
					],
					"majorationMeuble": 2.2,
					"meuble": [
						19,
						22.8,
						13.3
					],
					"secteur": "3",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						16.2,
						19.4,
						11.3
					],
					"majorationMeuble": 2.1,
					"meuble": [
						18.3,
						22,
						12.8
					],
					"secteur": "3",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						17.2,
						20.6,
						12
					],
					"majorationMeuble": 2.2,
					"meuble": [
						19.4,
						23.3,
						13.6
					],
					"secteur": "3",
					"pieces": 1
				},
				{
					"epoque": "1991-2005",
					"vide": [
						19.4,
						23.3,
						13.6
					],
					"majorationMeuble": 2.5,
					"meuble": [
						21.9,
						26.3,
						15.3
					],
					"secteur": "3",
					"pieces": 1
				},
				{
					"epoque": "apres-2005",
					"vide": [
						17.2,
						20.6,
						12
					],
					"majorationMeuble": 2.2,
					"meuble": [
						19.4,
						23.3,
						13.6
					],
					"secteur": "3",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14.2,
						17,
						9.9
					],
					"majorationMeuble": 1.8,
					"meuble": [
						16,
						19.2,
						11.2
					],
					"secteur": "3",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						13,
						15.6,
						9.1
					],
					"majorationMeuble": 1.7,
					"meuble": [
						14.7,
						17.6,
						10.3
					],
					"secteur": "3",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						13.2,
						15.8,
						9.2
					],
					"majorationMeuble": 1.7,
					"meuble": [
						14.9,
						17.9,
						10.4
					],
					"secteur": "3",
					"pieces": 2
				},
				{
					"epoque": "1991-2005",
					"vide": [
						14.8,
						17.8,
						10.4
					],
					"majorationMeuble": 1.9,
					"meuble": [
						16.7,
						20,
						11.7
					],
					"secteur": "3",
					"pieces": 2
				},
				{
					"epoque": "apres-2005",
					"vide": [
						15,
						18,
						10.5
					],
					"majorationMeuble": 2,
					"meuble": [
						17,
						20.4,
						11.9
					],
					"secteur": "3",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						12.3,
						14.8,
						8.6
					],
					"majorationMeuble": 1.6,
					"meuble": [
						13.9,
						16.7,
						9.7
					],
					"secteur": "3",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.3,
						14.8,
						8.6
					],
					"majorationMeuble": 1.6,
					"meuble": [
						13.9,
						16.7,
						9.7
					],
					"secteur": "3",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						11.9,
						14.3,
						8.3
					],
					"majorationMeuble": 1.5,
					"meuble": [
						13.4,
						16.1,
						9.4
					],
					"secteur": "3",
					"pieces": 3
				},
				{
					"epoque": "1991-2005",
					"vide": [
						12.7,
						15.2,
						8.9
					],
					"majorationMeuble": 1.7,
					"meuble": [
						14.4,
						17.3,
						10.1
					],
					"secteur": "3",
					"pieces": 3
				},
				{
					"epoque": "apres-2005",
					"vide": [
						13.6,
						16.3,
						9.5
					],
					"majorationMeuble": 1.8,
					"meuble": [
						15.4,
						18.5,
						10.8
					],
					"secteur": "3",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": 1.5,
					"meuble": [
						13.1,
						15.7,
						9.2
					],
					"secteur": "3",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11.9,
						14.3,
						8.3
					],
					"majorationMeuble": 1.5,
					"meuble": [
						13.4,
						16.1,
						9.4
					],
					"secteur": "3",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						11.4,
						13.7,
						8
					],
					"majorationMeuble": 1.5,
					"meuble": [
						12.9,
						15.5,
						9
					],
					"secteur": "3",
					"pieces": 4
				},
				{
					"epoque": "1991-2005",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": 1.6,
					"meuble": [
						13.8,
						16.6,
						9.7
					],
					"secteur": "3",
					"pieces": 4
				},
				{
					"epoque": "apres-2005",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": 1.6,
					"meuble": [
						13.8,
						16.6,
						9.7
					],
					"secteur": "3",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						16.7,
						20,
						11.7
					],
					"majorationMeuble": 2.2,
					"meuble": [
						18.9,
						22.7,
						13.2
					],
					"secteur": "4",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						15.7,
						18.8,
						11
					],
					"majorationMeuble": 2,
					"meuble": [
						17.7,
						21.2,
						12.4
					],
					"secteur": "4",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						15.7,
						18.8,
						11
					],
					"majorationMeuble": 2,
					"meuble": [
						17.7,
						21.2,
						12.4
					],
					"secteur": "4",
					"pieces": 1
				},
				{
					"epoque": "1991-2005",
					"vide": [
						17.5,
						21,
						12.3
					],
					"majorationMeuble": 2.3,
					"meuble": [
						19.8,
						23.8,
						13.9
					],
					"secteur": "4",
					"pieces": 1
				},
				{
					"epoque": "apres-2005",
					"vide": [
						16.1,
						19.3,
						11.3
					],
					"majorationMeuble": 2.1,
					"meuble": [
						18.2,
						21.8,
						12.7
					],
					"secteur": "4",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						13.6,
						16.3,
						9.5
					],
					"majorationMeuble": 1.8,
					"meuble": [
						15.4,
						18.5,
						10.8
					],
					"secteur": "4",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						13.5,
						16.2,
						9.5
					],
					"majorationMeuble": 1.8,
					"meuble": [
						15.3,
						18.4,
						10.7
					],
					"secteur": "4",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						13,
						15.6,
						9.1
					],
					"majorationMeuble": 1.7,
					"meuble": [
						14.7,
						17.6,
						10.3
					],
					"secteur": "4",
					"pieces": 2
				},
				{
					"epoque": "1991-2005",
					"vide": [
						14.4,
						17.3,
						10.1
					],
					"majorationMeuble": 1.9,
					"meuble": [
						16.3,
						19.6,
						11.4
					],
					"secteur": "4",
					"pieces": 2
				},
				{
					"epoque": "apres-2005",
					"vide": [
						14.9,
						17.9,
						10.4
					],
					"majorationMeuble": 1.9,
					"meuble": [
						16.8,
						20.2,
						11.8
					],
					"secteur": "4",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": 1.5,
					"meuble": [
						13.1,
						15.7,
						9.2
					],
					"secteur": "4",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": 1.5,
					"meuble": [
						12.7,
						15.2,
						8.9
					],
					"secteur": "4",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						10.9,
						13.1,
						7.6
					],
					"majorationMeuble": 1.4,
					"meuble": [
						12.3,
						14.8,
						8.6
					],
					"secteur": "4",
					"pieces": 3
				},
				{
					"epoque": "1991-2005",
					"vide": [
						12.1,
						14.5,
						8.5
					],
					"majorationMeuble": 1.6,
					"meuble": [
						13.7,
						16.4,
						9.6
					],
					"secteur": "4",
					"pieces": 3
				},
				{
					"epoque": "apres-2005",
					"vide": [
						13.1,
						15.7,
						9.2
					],
					"majorationMeuble": 1.7,
					"meuble": [
						14.8,
						17.8,
						10.4
					],
					"secteur": "4",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": 1.4,
					"meuble": [
						12.4,
						14.9,
						8.7
					],
					"secteur": "4",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						10,
						12,
						7
					],
					"majorationMeuble": 1.3,
					"meuble": [
						11.3,
						13.6,
						7.9
					],
					"secteur": "4",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						10.7,
						12.8,
						7.5
					],
					"majorationMeuble": 1.4,
					"meuble": [
						12.1,
						14.5,
						8.5
					],
					"secteur": "4",
					"pieces": 4
				},
				{
					"epoque": "1991-2005",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": 1.5,
					"meuble": [
						13.1,
						15.7,
						9.2
					],
					"secteur": "4",
					"pieces": 4
				},
				{
					"epoque": "apres-2005",
					"vide": [
						11.9,
						14.3,
						8.3
					],
					"majorationMeuble": 1.5,
					"meuble": [
						13.4,
						16.1,
						9.4
					],
					"secteur": "4",
					"pieces": 4
				},
				{
					"epoque": "avant-1946",
					"vide": [
						16.9,
						20.3,
						11.8
					],
					"majorationMeuble": 2.2,
					"meuble": [
						19.1,
						22.9,
						13.4
					],
					"secteur": "5",
					"pieces": 1
				},
				{
					"epoque": "1946-1970",
					"vide": [
						14.3,
						17.2,
						10
					],
					"majorationMeuble": 1.9,
					"meuble": [
						16.2,
						19.4,
						11.3
					],
					"secteur": "5",
					"pieces": 1
				},
				{
					"epoque": "1971-1990",
					"vide": [
						13.9,
						16.7,
						9.7
					],
					"majorationMeuble": 1.8,
					"meuble": [
						15.7,
						18.8,
						11
					],
					"secteur": "5",
					"pieces": 1
				},
				{
					"epoque": "1991-2005",
					"vide": [
						17.6,
						21.1,
						12.3
					],
					"majorationMeuble": 2.3,
					"meuble": [
						19.9,
						23.9,
						13.9
					],
					"secteur": "5",
					"pieces": 1
				},
				{
					"epoque": "apres-2005",
					"vide": [
						16.8,
						20.2,
						11.8
					],
					"majorationMeuble": 2.2,
					"meuble": [
						19,
						22.8,
						13.3
					],
					"secteur": "5",
					"pieces": 1
				},
				{
					"epoque": "avant-1946",
					"vide": [
						14,
						16.8,
						9.8
					],
					"majorationMeuble": 1.8,
					"meuble": [
						15.8,
						19,
						11.1
					],
					"secteur": "5",
					"pieces": 2
				},
				{
					"epoque": "1946-1970",
					"vide": [
						12.6,
						15.1,
						8.8
					],
					"majorationMeuble": 1.6,
					"meuble": [
						14.2,
						17,
						9.9
					],
					"secteur": "5",
					"pieces": 2
				},
				{
					"epoque": "1971-1990",
					"vide": [
						12.1,
						14.5,
						8.5
					],
					"majorationMeuble": 1.6,
					"meuble": [
						13.7,
						16.4,
						9.6
					],
					"secteur": "5",
					"pieces": 2
				},
				{
					"epoque": "1991-2005",
					"vide": [
						13.4,
						16.1,
						9.4
					],
					"majorationMeuble": 1.7,
					"meuble": [
						15.1,
						18.1,
						10.6
					],
					"secteur": "5",
					"pieces": 2
				},
				{
					"epoque": "apres-2005",
					"vide": [
						15.1,
						18.1,
						10.6
					],
					"majorationMeuble": 2,
					"meuble": [
						17.1,
						20.5,
						12
					],
					"secteur": "5",
					"pieces": 2
				},
				{
					"epoque": "avant-1946",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": 1.5,
					"meuble": [
						12.7,
						15.2,
						8.9
					],
					"secteur": "5",
					"pieces": 3
				},
				{
					"epoque": "1946-1970",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": 1.5,
					"meuble": [
						12.7,
						15.2,
						8.9
					],
					"secteur": "5",
					"pieces": 3
				},
				{
					"epoque": "1971-1990",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": 1.4,
					"meuble": [
						12.4,
						14.9,
						8.7
					],
					"secteur": "5",
					"pieces": 3
				},
				{
					"epoque": "1991-2005",
					"vide": [
						12.6,
						15.1,
						8.8
					],
					"majorationMeuble": 1.6,
					"meuble": [
						14.2,
						17,
						9.9
					],
					"secteur": "5",
					"pieces": 3
				},
				{
					"epoque": "apres-2005",
					"vide": [
						13.1,
						15.7,
						9.2
					],
					"majorationMeuble": 1.7,
					"meuble": [
						14.8,
						17.8,
						10.4
					],
					"secteur": "5",
					"pieces": 3
				},
				{
					"epoque": "avant-1946",
					"vide": [
						10.9,
						13.1,
						7.6
					],
					"majorationMeuble": 1.4,
					"meuble": [
						12.3,
						14.8,
						8.6
					],
					"secteur": "5",
					"pieces": 4
				},
				{
					"epoque": "1946-1970",
					"vide": [
						10,
						12,
						7
					],
					"majorationMeuble": 1.3,
					"meuble": [
						11.3,
						13.6,
						7.9
					],
					"secteur": "5",
					"pieces": 4
				},
				{
					"epoque": "1971-1990",
					"vide": [
						10,
						12,
						7
					],
					"majorationMeuble": 1.3,
					"meuble": [
						11.3,
						13.6,
						7.9
					],
					"secteur": "5",
					"pieces": 4
				},
				{
					"epoque": "1991-2005",
					"vide": [
						11.3,
						13.6,
						7.9
					],
					"majorationMeuble": 1.5,
					"meuble": [
						12.8,
						15.4,
						9
					],
					"secteur": "5",
					"pieces": 4
				},
				{
					"epoque": "apres-2005",
					"vide": [
						11.7,
						14,
						8.2
					],
					"majorationMeuble": 1.5,
					"meuble": [
						13.2,
						15.8,
						9.2
					],
					"secteur": "5",
					"pieces": 4
				}
			]
		}
	},
	{
		id: "lille",
		nom: "Lille, Hellemmes et Lomme",
		arrete: {
			"numero": "2026-02-10-00006",
			"signeLe": "2026-02-10",
			"valideDu": "2026-04-01",
			"valideJusquau": "2026-11-24",
			"url": "https://www.lille.fr/content/download/404914/4007936/file/Arrete+du+10+f%C3%A9vrier+2026_sans_carte.pdf",
			"page": "https://www.lille.fr/Vivre-a-Lille/Mon-logement/L-encadrement-des-loyers"
		},
		genereLe: "2026-11-12",
		communes: [{
			"insee": "59350",
			"nom": "Lille",
			"secteurs": [
				"1",
				"2",
				"3",
				"4",
				"5"
			],
			"anciennesCommunes": [{
				"insee": "59298",
				"nom": "Hellemmes"
			}, {
				"insee": "59355",
				"nom": "Lomme"
			}],
			"couverture": "totale"
		}],
		zonage: {
			"maille": "secteur",
			"resolution": "5 zones délimitées par la carte de l'annexe 2 (absente du PDF publié par la Ville). Le zonage open data de la Ville date de 2020 : le recouper avec la carte 2026 avant usage.",
			"geodonnees": "https://www.data.gouv.fr/datasets/encadrement-des-loyers-a-lille-hellemmes-et-lomme-zonage"
		},
		donnees: {
			"epoques": [
				{
					"cle": "avant-1946",
					"libelle": "avant 1946",
					"de": null,
					"a": 1945
				},
				{
					"cle": "1946-1970",
					"libelle": "1946-1970",
					"de": 1946,
					"a": 1970
				},
				{
					"cle": "1971-1990",
					"libelle": "1971-1990",
					"de": 1971,
					"a": 1990
				},
				{
					"cle": "apres-1990",
					"libelle": "après 1990",
					"de": 1991,
					"a": null
				}
			],
			"source": {
				"url": "https://www.lille.fr/content/download/404914/4007936/file/Arrete+du+10+f%C3%A9vrier+2026_sans_carte.pdf",
				"methode": "PDF scanné, tableaux de l'annexe 1 transcrits à la main dans scripts/encadrement/transcriptions.",
				"recupereLe": "2026-11-12"
			},
			"lignes": [
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						19.9,
						23.9,
						13.9
					],
					"majorationMeuble": 1.6,
					"meuble": [
						21.5,
						25.8,
						15.1
					]
				},
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						18.4,
						22.1,
						12.9
					],
					"majorationMeuble": 1.5,
					"meuble": [
						19.9,
						23.9,
						13.9
					]
				},
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						17.5,
						21,
						12.3
					],
					"majorationMeuble": 1.4,
					"meuble": [
						18.9,
						22.7,
						13.2
					]
				},
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						18.6,
						22.3,
						13
					],
					"majorationMeuble": 1.5,
					"meuble": [
						20.1,
						24.1,
						14.1
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						15.6,
						18.7,
						10.9
					],
					"majorationMeuble": 1.2,
					"meuble": [
						16.8,
						20.2,
						11.8
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						14.6,
						17.5,
						10.2
					],
					"majorationMeuble": 1.2,
					"meuble": [
						15.8,
						19,
						11.1
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						14.9,
						17.9,
						10.4
					],
					"majorationMeuble": 1.2,
					"meuble": [
						16.1,
						19.3,
						11.3
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						15.3,
						18.4,
						10.7
					],
					"majorationMeuble": 1.2,
					"meuble": [
						16.5,
						19.8,
						11.6
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						12.6,
						15.1,
						8.8
					],
					"majorationMeuble": 1,
					"meuble": [
						13.6,
						16.3,
						9.5
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": 1,
					"meuble": [
						13.4,
						16.1,
						9.4
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": 1,
					"meuble": [
						13.5,
						16.2,
						9.5
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						13.4,
						16.1,
						9.4
					],
					"majorationMeuble": 1.1,
					"meuble": [
						14.5,
						17.4,
						10.2
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						10.9,
						13.1,
						7.6
					],
					"majorationMeuble": .9,
					"meuble": [
						11.8,
						14.2,
						8.3
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						10.5,
						12.6,
						7.4
					],
					"majorationMeuble": .8,
					"meuble": [
						11.3,
						13.6,
						7.9
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": .9,
					"meuble": [
						11.9,
						14.3,
						8.3
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": 1,
					"meuble": [
						13.4,
						16.1,
						9.4
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						18.1,
						21.7,
						12.7
					],
					"majorationMeuble": 1.4,
					"meuble": [
						19.5,
						23.4,
						13.7
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						17.4,
						20.9,
						12.2
					],
					"majorationMeuble": 1.4,
					"meuble": [
						18.8,
						22.6,
						13.2
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						16.6,
						19.9,
						11.6
					],
					"majorationMeuble": 1.3,
					"meuble": [
						17.9,
						21.5,
						12.5
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						17.9,
						21.5,
						12.5
					],
					"majorationMeuble": 1.4,
					"meuble": [
						19.3,
						23.2,
						13.5
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						14.8,
						17.8,
						10.4
					],
					"majorationMeuble": 1.2,
					"meuble": [
						16,
						19.2,
						11.2
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						13.9,
						16.7,
						9.7
					],
					"majorationMeuble": 1.1,
					"meuble": [
						15,
						18,
						10.5
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						13.8,
						16.6,
						9.7
					],
					"majorationMeuble": 1.1,
					"meuble": [
						14.9,
						17.9,
						10.4
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						14.2,
						17,
						9.9
					],
					"majorationMeuble": 1.1,
					"meuble": [
						15.3,
						18.4,
						10.7
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						11.7,
						14,
						8.2
					],
					"majorationMeuble": .9,
					"meuble": [
						12.6,
						15.1,
						8.8
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						11.8,
						14.2,
						8.3
					],
					"majorationMeuble": .9,
					"meuble": [
						12.7,
						15.2,
						8.9
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						12,
						14.4,
						8.4
					],
					"majorationMeuble": 1,
					"meuble": [
						13,
						15.6,
						9.1
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": 1,
					"meuble": [
						13.5,
						16.2,
						9.5
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						10.6,
						12.7,
						7.4
					],
					"majorationMeuble": .8,
					"meuble": [
						11.4,
						13.7,
						8
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						10.5,
						12.6,
						7.4
					],
					"majorationMeuble": .8,
					"meuble": [
						11.3,
						13.6,
						7.9
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						10.7,
						12.8,
						7.5
					],
					"majorationMeuble": .9,
					"meuble": [
						11.6,
						13.9,
						8.1
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": 1,
					"meuble": [
						13.4,
						16.1,
						9.4
					]
				},
				{
					"secteur": "3",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						17.4,
						20.9,
						12.2
					],
					"majorationMeuble": 1.4,
					"meuble": [
						18.8,
						22.6,
						13.2
					]
				},
				{
					"secteur": "3",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						17.1,
						20.5,
						12
					],
					"majorationMeuble": 1.4,
					"meuble": [
						18.5,
						22.2,
						13
					]
				},
				{
					"secteur": "3",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						16,
						19.2,
						11.2
					],
					"majorationMeuble": 1.3,
					"meuble": [
						17.3,
						20.8,
						12.1
					]
				},
				{
					"secteur": "3",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						16.7,
						20,
						11.7
					],
					"majorationMeuble": 1.3,
					"meuble": [
						18,
						21.6,
						12.6
					]
				},
				{
					"secteur": "3",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						14.5,
						17.4,
						10.2
					],
					"majorationMeuble": 1.2,
					"meuble": [
						15.7,
						18.8,
						11
					]
				},
				{
					"secteur": "3",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": 1,
					"meuble": [
						13.5,
						16.2,
						9.5
					]
				},
				{
					"secteur": "3",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1,
					"meuble": [
						13.9,
						16.7,
						9.7
					]
				},
				{
					"secteur": "3",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						13.6,
						16.3,
						9.5
					],
					"majorationMeuble": 1.1,
					"meuble": [
						14.7,
						17.6,
						10.3
					]
				},
				{
					"secteur": "3",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						11.5,
						13.8,
						8.1
					],
					"majorationMeuble": .9,
					"meuble": [
						12.4,
						14.9,
						8.7
					]
				},
				{
					"secteur": "3",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						10.9,
						13.1,
						7.6
					],
					"majorationMeuble": .9,
					"meuble": [
						11.8,
						14.2,
						8.3
					]
				},
				{
					"secteur": "3",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": .9,
					"meuble": [
						11.9,
						14.3,
						8.3
					]
				},
				{
					"secteur": "3",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						11.8,
						14.2,
						8.3
					],
					"majorationMeuble": .9,
					"meuble": [
						12.7,
						15.2,
						8.9
					]
				},
				{
					"secteur": "3",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						10.1,
						12.1,
						7.1
					],
					"majorationMeuble": .8,
					"meuble": [
						10.9,
						13.1,
						7.6
					]
				},
				{
					"secteur": "3",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						10.5,
						12.6,
						7.4
					],
					"majorationMeuble": .8,
					"meuble": [
						11.3,
						13.6,
						7.9
					]
				},
				{
					"secteur": "3",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						10.5,
						12.6,
						7.4
					],
					"majorationMeuble": .8,
					"meuble": [
						11.3,
						13.6,
						7.9
					]
				},
				{
					"secteur": "3",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": .9,
					"meuble": [
						12.5,
						15,
						8.8
					]
				},
				{
					"secteur": "4",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						17.1,
						20.5,
						12
					],
					"majorationMeuble": 1.4,
					"meuble": [
						18.5,
						22.2,
						13
					]
				},
				{
					"secteur": "4",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						15,
						18,
						10.5
					],
					"majorationMeuble": 1.2,
					"meuble": [
						16.2,
						19.4,
						11.3
					]
				},
				{
					"secteur": "4",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						14.6,
						17.5,
						10.2
					],
					"majorationMeuble": 1.2,
					"meuble": [
						15.8,
						19,
						11.1
					]
				},
				{
					"secteur": "4",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						16,
						19.2,
						11.2
					],
					"majorationMeuble": 1.3,
					"meuble": [
						17.3,
						20.8,
						12.1
					]
				},
				{
					"secteur": "4",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						13.1,
						15.7,
						9.2
					],
					"majorationMeuble": 1,
					"meuble": [
						14.1,
						16.9,
						9.9
					]
				},
				{
					"secteur": "4",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": 1,
					"meuble": [
						13.2,
						15.8,
						9.2
					]
				},
				{
					"secteur": "4",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": .9,
					"meuble": [
						12.5,
						15,
						8.8
					]
				},
				{
					"secteur": "4",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1,
					"meuble": [
						13.9,
						16.7,
						9.7
					]
				},
				{
					"secteur": "4",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						11.4,
						13.7,
						8
					],
					"majorationMeuble": .9,
					"meuble": [
						12.3,
						14.8,
						8.6
					]
				},
				{
					"secteur": "4",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						10.2,
						12.2,
						7.1
					],
					"majorationMeuble": .8,
					"meuble": [
						11,
						13.2,
						7.7
					]
				},
				{
					"secteur": "4",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						10.5,
						12.6,
						7.4
					],
					"majorationMeuble": .8,
					"meuble": [
						11.3,
						13.6,
						7.9
					]
				},
				{
					"secteur": "4",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						11.3,
						13.6,
						7.9
					],
					"majorationMeuble": .9,
					"meuble": [
						12.2,
						14.6,
						8.5
					]
				},
				{
					"secteur": "4",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						9.5,
						11.4,
						6.7
					],
					"majorationMeuble": .8,
					"meuble": [
						10.3,
						12.4,
						7.2
					]
				},
				{
					"secteur": "4",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						9.7,
						11.6,
						6.8
					],
					"majorationMeuble": .8,
					"meuble": [
						10.5,
						12.6,
						7.4
					]
				},
				{
					"secteur": "4",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						9.8,
						11.8,
						6.9
					],
					"majorationMeuble": .8,
					"meuble": [
						10.6,
						12.7,
						7.4
					]
				},
				{
					"secteur": "4",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						10.8,
						13,
						7.6
					],
					"majorationMeuble": .9,
					"meuble": [
						11.7,
						14,
						8.2
					]
				},
				{
					"secteur": "5",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						14.2,
						17,
						9.9
					],
					"majorationMeuble": 1.1,
					"meuble": [
						15.3,
						18.4,
						10.7
					]
				},
				{
					"secteur": "5",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1,
					"meuble": [
						13.9,
						16.7,
						9.7
					]
				},
				{
					"secteur": "5",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1,
					"meuble": [
						13.9,
						16.7,
						9.7
					]
				},
				{
					"secteur": "5",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						13.9,
						16.7,
						9.7
					],
					"majorationMeuble": 1.1,
					"meuble": [
						15,
						18,
						10.5
					]
				},
				{
					"secteur": "5",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": 1,
					"meuble": [
						13.2,
						15.8,
						9.2
					]
				},
				{
					"secteur": "5",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": .9,
					"meuble": [
						11.9,
						14.3,
						8.3
					]
				},
				{
					"secteur": "5",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						10.7,
						12.8,
						7.5
					],
					"majorationMeuble": .9,
					"meuble": [
						11.6,
						13.9,
						8.1
					]
				},
				{
					"secteur": "5",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						12.3,
						14.8,
						8.6
					],
					"majorationMeuble": 1,
					"meuble": [
						13.3,
						16,
						9.3
					]
				},
				{
					"secteur": "5",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						9.9,
						11.9,
						6.9
					],
					"majorationMeuble": .8,
					"meuble": [
						10.7,
						12.8,
						7.5
					]
				},
				{
					"secteur": "5",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						9.6,
						11.5,
						6.7
					],
					"majorationMeuble": .8,
					"meuble": [
						10.4,
						12.5,
						7.3
					]
				},
				{
					"secteur": "5",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						9.4,
						11.3,
						6.6
					],
					"majorationMeuble": .8,
					"meuble": [
						10.2,
						12.2,
						7.1
					]
				},
				{
					"secteur": "5",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						10.7,
						12.8,
						7.5
					],
					"majorationMeuble": .9,
					"meuble": [
						11.6,
						13.9,
						8.1
					]
				},
				{
					"secteur": "5",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						8.4,
						10.1,
						5.9
					],
					"majorationMeuble": .7,
					"meuble": [
						9.1,
						10.9,
						6.4
					]
				},
				{
					"secteur": "5",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						8.9,
						10.7,
						6.2
					],
					"majorationMeuble": .7,
					"meuble": [
						9.6,
						11.5,
						6.7
					]
				},
				{
					"secteur": "5",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						8.4,
						10.1,
						5.9
					],
					"majorationMeuble": .7,
					"meuble": [
						9.1,
						10.9,
						6.4
					]
				},
				{
					"secteur": "5",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						9.4,
						11.3,
						6.6
					],
					"majorationMeuble": .8,
					"meuble": [
						10.2,
						12.2,
						7.1
					]
				}
			]
		}
	},
	bordeaux_default,
	{
		id: "montpellier",
		nom: "Montpellier",
		arrete: {
			"numero": "DDTM34-2026-06-17135",
			"signeLe": "2026-06-09",
			"valideDu": "2026-07-01",
			"valideJusquau": "2026-11-23",
			"url": "https://www.herault.gouv.fr/contenu/telechargement/56681/414967/file/2026-07-01_AP_EncadrementLoyers-Montpellier.pdf",
			"page": "https://www.anil.org/adil-34/lencadrement-des-loyers-a-montpellier/"
		},
		genereLe: "2026-11-12",
		communes: [{
			"insee": "34172",
			"nom": "Montpellier",
			"secteurs": [
				"1",
				"2",
				"3",
				"4",
				"5"
			],
			"couverture": "totale"
		}],
		zonage: {
			"maille": "secteur",
			"resolution": "5 zones délimitées par la carte et l'atlas de l'annexe 2 de l'arrêté ; le simulateur de Montpellier Méditerranée Métropole donne la zone d'une adresse.",
			"geodonnees": "https://eservices.montpellier3m.fr/habitat/encadrement-des-loyers/"
		},
		donnees: {
			"epoques": [
				{
					"cle": "avant-1946",
					"libelle": "avant 1946",
					"de": null,
					"a": 1945
				},
				{
					"cle": "1946-1970",
					"libelle": "1946-1970",
					"de": 1946,
					"a": 1970
				},
				{
					"cle": "1971-1990",
					"libelle": "1971-1990",
					"de": 1971,
					"a": 1990
				},
				{
					"cle": "1991-2005",
					"libelle": "1991-2005",
					"de": 1991,
					"a": 2005
				},
				{
					"cle": "apres-2005",
					"libelle": "après 2005",
					"de": 2006,
					"a": null
				}
			],
			"source": {
				"url": "https://www.herault.gouv.fr/contenu/telechargement/56681/414967/file/2026-07-01_AP_EncadrementLoyers-Montpellier.pdf",
				"methode": "PDF scanné, tableaux de l'annexe 1 transcrits à la main dans scripts/encadrement/transcriptions.",
				"recupereLe": "2026-11-12"
			},
			"lignes": [
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						20.2,
						24.2,
						14.1
					],
					"majorationMeuble": 1.8,
					"meuble": [
						22,
						26.4,
						15.4
					]
				},
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						18.7,
						22.4,
						13.1
					],
					"majorationMeuble": 1.7,
					"meuble": [
						20.4,
						24.5,
						14.3
					]
				},
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						21.4,
						25.7,
						15
					],
					"majorationMeuble": 1.9,
					"meuble": [
						23.3,
						28,
						16.3
					]
				},
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "1991-2005",
					"vide": [
						19.1,
						22.9,
						13.4
					],
					"majorationMeuble": 1.7,
					"meuble": [
						20.8,
						25,
						14.6
					]
				},
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "apres-2005",
					"vide": [
						18.2,
						21.8,
						12.7
					],
					"majorationMeuble": 1.6,
					"meuble": [
						19.8,
						23.8,
						13.9
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						15.6,
						18.7,
						10.9
					],
					"majorationMeuble": 1.4,
					"meuble": [
						17,
						20.4,
						11.9
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						14.8,
						17.8,
						10.4
					],
					"majorationMeuble": 1.3,
					"meuble": [
						16.1,
						19.3,
						11.3
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						14,
						16.8,
						9.8
					],
					"majorationMeuble": 1.3,
					"meuble": [
						15.3,
						18.4,
						10.7
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "1991-2005",
					"vide": [
						15.6,
						18.7,
						10.9
					],
					"majorationMeuble": 1.4,
					"meuble": [
						17,
						20.4,
						11.9
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "apres-2005",
					"vide": [
						15.5,
						18.6,
						10.9
					],
					"majorationMeuble": 1.4,
					"meuble": [
						16.9,
						20.3,
						11.8
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13.5,
						16.2,
						9.5
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						12.3,
						14.8,
						8.6
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13.4,
						16.1,
						9.4
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						11.8,
						14.2,
						8.3
					],
					"majorationMeuble": 1.1,
					"meuble": [
						12.9,
						15.5,
						9
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "1991-2005",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.1,
						16.9,
						9.9
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "apres-2005",
					"vide": [
						13.7,
						16.4,
						9.6
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.9,
						17.9,
						10.4
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13.3,
						16,
						9.3
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13.3,
						16,
						9.3
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						11.1,
						13.3,
						7.8
					],
					"majorationMeuble": 1,
					"meuble": [
						12.1,
						14.5,
						8.5
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "1991-2005",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13.5,
						16.2,
						9.5
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "apres-2005",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13.6,
						16.3,
						9.5
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						18.2,
						21.8,
						12.7
					],
					"majorationMeuble": 1.6,
					"meuble": [
						19.8,
						23.8,
						13.9
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						18.4,
						22.1,
						12.9
					],
					"majorationMeuble": 1.7,
					"meuble": [
						20.1,
						24.1,
						14.1
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						19.5,
						23.4,
						13.7
					],
					"majorationMeuble": 1.8,
					"meuble": [
						21.3,
						25.6,
						14.9
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "1991-2005",
					"vide": [
						19,
						22.8,
						13.3
					],
					"majorationMeuble": 1.7,
					"meuble": [
						20.7,
						24.8,
						14.5
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "apres-2005",
					"vide": [
						18,
						21.6,
						12.6
					],
					"majorationMeuble": 1.6,
					"meuble": [
						19.6,
						23.5,
						13.7
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						14.8,
						17.8,
						10.4
					],
					"majorationMeuble": 1.3,
					"meuble": [
						16.1,
						19.3,
						11.3
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						14.4,
						17.3,
						10.1
					],
					"majorationMeuble": 1.3,
					"meuble": [
						15.7,
						18.8,
						11
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						14.1,
						16.9,
						9.9
					],
					"majorationMeuble": 1.3,
					"meuble": [
						15.4,
						18.5,
						10.8
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "1991-2005",
					"vide": [
						15.8,
						19,
						11.1
					],
					"majorationMeuble": 1.4,
					"meuble": [
						17.2,
						20.6,
						12
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "apres-2005",
					"vide": [
						14.8,
						17.8,
						10.4
					],
					"majorationMeuble": 1.3,
					"meuble": [
						16.1,
						19.3,
						11.3
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						12.3,
						14.8,
						8.6
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13.4,
						16.1,
						9.4
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13.5,
						16.2,
						9.5
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						11.8,
						14.2,
						8.3
					],
					"majorationMeuble": 1.1,
					"meuble": [
						12.9,
						15.5,
						9
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "1991-2005",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.1,
						16.9,
						9.9
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "apres-2005",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.1,
						16.9,
						9.9
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": 1,
					"meuble": [
						12,
						14.4,
						8.4
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						11.4,
						13.7,
						8
					],
					"majorationMeuble": 1,
					"meuble": [
						12.4,
						14.9,
						8.7
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						10.8,
						13,
						7.6
					],
					"majorationMeuble": 1,
					"meuble": [
						11.8,
						14.2,
						8.3
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "1991-2005",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": 1,
					"meuble": [
						12,
						14.4,
						8.4
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "apres-2005",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": 1,
					"meuble": [
						12.6,
						15.1,
						8.8
					]
				},
				{
					"secteur": "3",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						17.2,
						20.6,
						12
					],
					"majorationMeuble": 1.5,
					"meuble": [
						18.7,
						22.4,
						13.1
					]
				},
				{
					"secteur": "3",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						17.5,
						21,
						12.3
					],
					"majorationMeuble": 1.6,
					"meuble": [
						19.1,
						22.9,
						13.4
					]
				},
				{
					"secteur": "3",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						17.4,
						20.9,
						12.2
					],
					"majorationMeuble": 1.6,
					"meuble": [
						19,
						22.8,
						13.3
					]
				},
				{
					"secteur": "3",
					"pieces": 1,
					"epoque": "1991-2005",
					"vide": [
						17.9,
						21.5,
						12.5
					],
					"majorationMeuble": 1.6,
					"meuble": [
						19.5,
						23.4,
						13.7
					]
				},
				{
					"secteur": "3",
					"pieces": 1,
					"epoque": "apres-2005",
					"vide": [
						17.4,
						20.9,
						12.2
					],
					"majorationMeuble": 1.6,
					"meuble": [
						19,
						22.8,
						13.3
					]
				},
				{
					"secteur": "3",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						13.7,
						16.4,
						9.6
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.9,
						17.9,
						10.4
					]
				},
				{
					"secteur": "3",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						13.5,
						16.2,
						9.5
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.7,
						17.6,
						10.3
					]
				},
				{
					"secteur": "3",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						13.3,
						16,
						9.3
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.5,
						17.4,
						10.2
					]
				},
				{
					"secteur": "3",
					"pieces": 2,
					"epoque": "1991-2005",
					"vide": [
						14.5,
						17.4,
						10.2
					],
					"majorationMeuble": 1.3,
					"meuble": [
						15.8,
						19,
						11.1
					]
				},
				{
					"secteur": "3",
					"pieces": 2,
					"epoque": "apres-2005",
					"vide": [
						14.7,
						17.6,
						10.3
					],
					"majorationMeuble": 1.3,
					"meuble": [
						16,
						19.2,
						11.2
					]
				},
				{
					"secteur": "3",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": 1,
					"meuble": [
						12.6,
						15.1,
						8.8
					]
				},
				{
					"secteur": "3",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						11.7,
						14,
						8.2
					],
					"majorationMeuble": 1.1,
					"meuble": [
						12.8,
						15.4,
						9
					]
				},
				{
					"secteur": "3",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						11.8,
						14.2,
						8.3
					],
					"majorationMeuble": 1.1,
					"meuble": [
						12.9,
						15.5,
						9
					]
				},
				{
					"secteur": "3",
					"pieces": 3,
					"epoque": "1991-2005",
					"vide": [
						11.8,
						14.2,
						8.3
					],
					"majorationMeuble": 1.1,
					"meuble": [
						12.9,
						15.5,
						9
					]
				},
				{
					"secteur": "3",
					"pieces": 3,
					"epoque": "apres-2005",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.1,
						16.9,
						9.9
					]
				},
				{
					"secteur": "3",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": 1,
					"meuble": [
						12,
						14.4,
						8.4
					]
				},
				{
					"secteur": "3",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": 1,
					"meuble": [
						12,
						14.4,
						8.4
					]
				},
				{
					"secteur": "3",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						10.8,
						13,
						7.6
					],
					"majorationMeuble": 1,
					"meuble": [
						11.8,
						14.2,
						8.3
					]
				},
				{
					"secteur": "3",
					"pieces": 4,
					"epoque": "1991-2005",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": 1,
					"meuble": [
						12,
						14.4,
						8.4
					]
				},
				{
					"secteur": "3",
					"pieces": 4,
					"epoque": "apres-2005",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": 1,
					"meuble": [
						12.2,
						14.6,
						8.5
					]
				},
				{
					"secteur": "4",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						17.2,
						20.6,
						12
					],
					"majorationMeuble": 1.5,
					"meuble": [
						18.7,
						22.4,
						13.1
					]
				},
				{
					"secteur": "4",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						16.3,
						19.6,
						11.4
					],
					"majorationMeuble": 1.5,
					"meuble": [
						17.8,
						21.4,
						12.5
					]
				},
				{
					"secteur": "4",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						16.7,
						20,
						11.7
					],
					"majorationMeuble": 1.5,
					"meuble": [
						18.2,
						21.8,
						12.7
					]
				},
				{
					"secteur": "4",
					"pieces": 1,
					"epoque": "1991-2005",
					"vide": [
						17.6,
						21.1,
						12.3
					],
					"majorationMeuble": 1.6,
					"meuble": [
						19.2,
						23,
						13.4
					]
				},
				{
					"secteur": "4",
					"pieces": 1,
					"epoque": "apres-2005",
					"vide": [
						17.4,
						20.9,
						12.2
					],
					"majorationMeuble": 1.6,
					"meuble": [
						19,
						22.8,
						13.3
					]
				},
				{
					"secteur": "4",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						13.8,
						16.6,
						9.7
					],
					"majorationMeuble": 1.2,
					"meuble": [
						15,
						18,
						10.5
					]
				},
				{
					"secteur": "4",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						13.2,
						15.8,
						9.2
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.4,
						17.3,
						10.1
					]
				},
				{
					"secteur": "4",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						13.7,
						16.4,
						9.6
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.9,
						17.9,
						10.4
					]
				},
				{
					"secteur": "4",
					"pieces": 2,
					"epoque": "1991-2005",
					"vide": [
						13.4,
						16.1,
						9.4
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.6,
						17.5,
						10.2
					]
				},
				{
					"secteur": "4",
					"pieces": 2,
					"epoque": "apres-2005",
					"vide": [
						14.3,
						17.2,
						10
					],
					"majorationMeuble": 1.3,
					"meuble": [
						15.6,
						18.7,
						10.9
					]
				},
				{
					"secteur": "4",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						11.5,
						13.8,
						8.1
					],
					"majorationMeuble": 1,
					"meuble": [
						12.5,
						15,
						8.8
					]
				},
				{
					"secteur": "4",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						11.4,
						13.7,
						8
					],
					"majorationMeuble": 1,
					"meuble": [
						12.4,
						14.9,
						8.7
					]
				},
				{
					"secteur": "4",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						11.7,
						14,
						8.2
					],
					"majorationMeuble": 1.1,
					"meuble": [
						12.8,
						15.4,
						9
					]
				},
				{
					"secteur": "4",
					"pieces": 3,
					"epoque": "1991-2005",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": 1,
					"meuble": [
						12.6,
						15.1,
						8.8
					]
				},
				{
					"secteur": "4",
					"pieces": 3,
					"epoque": "apres-2005",
					"vide": [
						12.3,
						14.8,
						8.6
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13.4,
						16.1,
						9.4
					]
				},
				{
					"secteur": "4",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						10.8,
						13,
						7.6
					],
					"majorationMeuble": 1,
					"meuble": [
						11.8,
						14.2,
						8.3
					]
				},
				{
					"secteur": "4",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						11.1,
						13.3,
						7.8
					],
					"majorationMeuble": 1,
					"meuble": [
						12.1,
						14.5,
						8.5
					]
				},
				{
					"secteur": "4",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						10.8,
						13,
						7.6
					],
					"majorationMeuble": 1,
					"meuble": [
						11.8,
						14.2,
						8.3
					]
				},
				{
					"secteur": "4",
					"pieces": 4,
					"epoque": "1991-2005",
					"vide": [
						10.9,
						13.1,
						7.6
					],
					"majorationMeuble": 1,
					"meuble": [
						11.9,
						14.3,
						8.3
					]
				},
				{
					"secteur": "4",
					"pieces": 4,
					"epoque": "apres-2005",
					"vide": [
						11.1,
						13.3,
						7.8
					],
					"majorationMeuble": 1,
					"meuble": [
						12.1,
						14.5,
						8.5
					]
				},
				{
					"secteur": "5",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						15.1,
						18.1,
						10.6
					],
					"majorationMeuble": 1.4,
					"meuble": [
						16.5,
						19.8,
						11.6
					]
				},
				{
					"secteur": "5",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						15.1,
						18.1,
						10.6
					],
					"majorationMeuble": 1.4,
					"meuble": [
						16.5,
						19.8,
						11.6
					]
				},
				{
					"secteur": "5",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						15.3,
						18.4,
						10.7
					],
					"majorationMeuble": 1.4,
					"meuble": [
						16.7,
						20,
						11.7
					]
				},
				{
					"secteur": "5",
					"pieces": 1,
					"epoque": "1991-2005",
					"vide": [
						17.2,
						20.6,
						12
					],
					"majorationMeuble": 1.5,
					"meuble": [
						18.7,
						22.4,
						13.1
					]
				},
				{
					"secteur": "5",
					"pieces": 1,
					"epoque": "apres-2005",
					"vide": [
						15.7,
						18.8,
						11
					],
					"majorationMeuble": 1.4,
					"meuble": [
						17.1,
						20.5,
						12
					]
				},
				{
					"secteur": "5",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						12.7,
						15.2,
						8.9
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13.8,
						16.6,
						9.7
					]
				},
				{
					"secteur": "5",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						12.7,
						15.2,
						8.9
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13.8,
						16.6,
						9.7
					]
				},
				{
					"secteur": "5",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						11.9,
						14.3,
						8.3
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13,
						15.6,
						9.1
					]
				},
				{
					"secteur": "5",
					"pieces": 2,
					"epoque": "1991-2005",
					"vide": [
						13.6,
						16.3,
						9.5
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.8,
						17.8,
						10.4
					]
				},
				{
					"secteur": "5",
					"pieces": 2,
					"epoque": "apres-2005",
					"vide": [
						13.6,
						16.3,
						9.5
					],
					"majorationMeuble": 1.2,
					"meuble": [
						14.8,
						17.8,
						10.4
					]
				},
				{
					"secteur": "5",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						10,
						12,
						7
					],
					"majorationMeuble": .9,
					"meuble": [
						10.9,
						13.1,
						7.6
					]
				},
				{
					"secteur": "5",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						10.4,
						12.5,
						7.3
					],
					"majorationMeuble": .9,
					"meuble": [
						11.3,
						13.6,
						7.9
					]
				},
				{
					"secteur": "5",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						10.1,
						12.1,
						7.1
					],
					"majorationMeuble": .9,
					"meuble": [
						11,
						13.2,
						7.7
					]
				},
				{
					"secteur": "5",
					"pieces": 3,
					"epoque": "1991-2005",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": 1,
					"meuble": [
						12.6,
						15.1,
						8.8
					]
				},
				{
					"secteur": "5",
					"pieces": 3,
					"epoque": "apres-2005",
					"vide": [
						11.9,
						14.3,
						8.3
					],
					"majorationMeuble": 1.1,
					"meuble": [
						13,
						15.6,
						9.1
					]
				},
				{
					"secteur": "5",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						9.7,
						11.6,
						6.8
					],
					"majorationMeuble": .9,
					"meuble": [
						10.6,
						12.7,
						7.4
					]
				},
				{
					"secteur": "5",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						10.4,
						12.5,
						7.3
					],
					"majorationMeuble": .9,
					"meuble": [
						11.3,
						13.6,
						7.9
					]
				},
				{
					"secteur": "5",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						9.7,
						11.6,
						6.8
					],
					"majorationMeuble": .9,
					"meuble": [
						10.6,
						12.7,
						7.4
					]
				},
				{
					"secteur": "5",
					"pieces": 4,
					"epoque": "1991-2005",
					"vide": [
						10.7,
						12.8,
						7.5
					],
					"majorationMeuble": 1,
					"meuble": [
						11.7,
						14,
						8.2
					]
				},
				{
					"secteur": "5",
					"pieces": 4,
					"epoque": "apres-2005",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": 1,
					"meuble": [
						12,
						14.4,
						8.4
					]
				}
			]
		}
	},
	{
		id: "pays-basque",
		nom: "Communauté d'agglomération Pays Basque, 24 communes",
		arrete: {
			"numero": "64-2025-10-27-00007",
			"signeLe": "2025-10-27",
			"publieLe": "2025-10-28",
			"valideDu": "2025-11-25",
			"valideJusquau": "2026-11-24",
			"url": "https://www.pyrenees-atlantiques.gouv.fr/contenu/telechargement/59982/439524/file/Arr%C3%AAt%C3%A9%20encadrement%20des%20loyers%202025%20-%202026%20.pdf",
			"page": "https://www.pyrenees-atlantiques.gouv.fr/Actions-de-l-Etat/Logement/Encadrement-des-loyers-Zone-tendue-du-Pays-basque"
		},
		genereLe: "2026-11-12",
		communes: [
			{
				"insee": "64038",
				"nom": "Arcangues",
				"secteur": "1",
				"couverture": "totale"
			},
			{
				"insee": "64122",
				"nom": "Biarritz",
				"secteur": "1",
				"couverture": "totale"
			},
			{
				"insee": "64125",
				"nom": "Bidart",
				"secteur": "1",
				"couverture": "totale"
			},
			{
				"insee": "64249",
				"nom": "Guéthary",
				"secteur": "1",
				"couverture": "totale"
			},
			{
				"insee": "64483",
				"nom": "Saint-Jean-de-Luz",
				"secteur": "1",
				"couverture": "totale"
			},
			{
				"insee": "64009",
				"nom": "Ahetze",
				"secteur": "2",
				"couverture": "totale"
			},
			{
				"insee": "64035",
				"nom": "Arbonne",
				"secteur": "2",
				"couverture": "totale"
			},
			{
				"insee": "64065",
				"nom": "Ascain",
				"secteur": "2",
				"couverture": "totale"
			},
			{
				"insee": "64100",
				"nom": "Bassussarry",
				"secteur": "2",
				"couverture": "totale"
			},
			{
				"insee": "64545",
				"nom": "Urrugne",
				"secteur": "2",
				"couverture": "totale"
			},
			{
				"insee": "64130",
				"nom": "Biriatou",
				"secteur": "3",
				"couverture": "totale"
			},
			{
				"insee": "64140",
				"nom": "Boucau",
				"secteur": "3",
				"couverture": "totale"
			},
			{
				"insee": "64260",
				"nom": "Hendaye",
				"secteur": "3",
				"couverture": "totale"
			},
			{
				"insee": "64282",
				"nom": "Jatxou",
				"secteur": "3",
				"couverture": "totale"
			},
			{
				"insee": "64304",
				"nom": "Lahonce",
				"secteur": "3",
				"couverture": "totale"
			},
			{
				"insee": "64317",
				"nom": "Larressore",
				"secteur": "3",
				"couverture": "totale"
			},
			{
				"insee": "64407",
				"nom": "Mouguerre",
				"secteur": "3",
				"couverture": "totale"
			},
			{
				"insee": "64496",
				"nom": "Saint-Pierre-d'Irube",
				"secteur": "3",
				"couverture": "totale"
			},
			{
				"insee": "64540",
				"nom": "Urcuit",
				"secteur": "3",
				"couverture": "totale"
			},
			{
				"insee": "64547",
				"nom": "Ustaritz",
				"secteur": "3",
				"couverture": "totale"
			},
			{
				"insee": "64558",
				"nom": "Villefranque",
				"secteur": "3",
				"couverture": "totale"
			},
			{
				"insee": "64024",
				"nom": "Anglet",
				"secteurs": ["1", "2"],
				"noteSecteur": "Anglet : zone 1 au nord du boulevard du BAB, zone 2 au sud ; la limite suit des tronçons de rues, côté pair ou impair (annexe 2, focus n° 1 et 2, pages 10 et 11 du recueil).",
				"couverture": "totale"
			},
			{
				"insee": "64102",
				"nom": "Bayonne",
				"secteurs": [
					"1",
					"2",
					"3"
				],
				"noteSecteur": "Bayonne : rive droite de l'Adour et rive droite de la Nive en zone 3, rive gauche en zone 2 sauf le quartier des Arènes en zone 1 (annexe 2, focus n° 1 et 2, pages 12 et 13 du recueil).",
				"couverture": "totale"
			},
			{
				"insee": "64189",
				"nom": "Ciboure",
				"secteurs": ["1", "2"],
				"noteSecteur": "Ciboure : la voie ferrée fait limite, zone 1 au nord-ouest, zone 2 au sud-est (annexe 2, focus Ciboure, page 14 du recueil).",
				"couverture": "totale"
			}
		],
		zonage: {
			"maille": "secteur",
			"resolution": "3 zones (annexe 2). 21 communes sont entières dans une zone ; Anglet, Bayonne et Ciboure sont partagées selon des limites de rues décrites sur les focus de l'annexe 2.",
			"geodonnees": "https://www.pyrenees-atlantiques.gouv.fr/contenu/telechargement/59982/439524/file/Arr%C3%AAt%C3%A9%20encadrement%20des%20loyers%202025%20-%202026%20.pdf"
		},
		donnees: {
			"epoques": [
				{
					"cle": "avant-1946",
					"libelle": "avant 1946",
					"de": null,
					"a": 1945
				},
				{
					"cle": "1946-1970",
					"libelle": "1946-1970",
					"de": 1946,
					"a": 1970
				},
				{
					"cle": "1971-1990",
					"libelle": "1971-1990",
					"de": 1971,
					"a": 1990
				},
				{
					"cle": "apres-1990",
					"libelle": "après 1990",
					"de": 1991,
					"a": null
				}
			],
			"source": {
				"url": "https://www.pyrenees-atlantiques.gouv.fr/contenu/telechargement/59982/439524/file/Arr%C3%AAt%C3%A9%20encadrement%20des%20loyers%202025%20-%202026%20.pdf",
				"methode": "PDF scanné, tableaux de l'annexe 1 transcrits à la main dans scripts/encadrement/transcriptions.",
				"recupereLe": "2026-11-12"
			},
			"lignes": [
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						18.7,
						22.4,
						13.1
					],
					"majorationMeuble": 2.1,
					"meuble": [
						20.8,
						25,
						14.6
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						16.2,
						19.4,
						11.3
					],
					"majorationMeuble": 1.8,
					"meuble": [
						18,
						21.6,
						12.6
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						18.2,
						21.8,
						12.7
					],
					"majorationMeuble": 2,
					"meuble": [
						20.2,
						24.2,
						14.1
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						16.4,
						19.7,
						11.5
					],
					"majorationMeuble": 1.8,
					"meuble": [
						18.2,
						21.8,
						12.7
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						14.3,
						17.2,
						10
					],
					"majorationMeuble": 1.6,
					"meuble": [
						15.9,
						19.1,
						11.1
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						12.8,
						15.4,
						9
					],
					"majorationMeuble": 1.4,
					"meuble": [
						14.2,
						17,
						9.9
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1.4,
					"meuble": [
						14.3,
						17.2,
						10
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						13.3,
						16,
						9.3
					],
					"majorationMeuble": 1.5,
					"meuble": [
						14.8,
						17.8,
						10.4
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						12.1,
						14.5,
						8.5
					],
					"majorationMeuble": 1.3,
					"meuble": [
						13.4,
						16.1,
						9.4
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						11.3,
						13.6,
						7.9
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12.5,
						15,
						8.8
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						11.9,
						14.3,
						8.3
					],
					"majorationMeuble": 1.3,
					"meuble": [
						13.2,
						15.8,
						9.2
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						11.8,
						14.2,
						8.3
					],
					"majorationMeuble": 1.3,
					"meuble": [
						13.1,
						15.7,
						9.2
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						10.4,
						12.5,
						7.3
					],
					"majorationMeuble": 1.1,
					"meuble": [
						11.5,
						13.8,
						8.1
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						10.2,
						12.2,
						7.1
					],
					"majorationMeuble": 1.1,
					"meuble": [
						11.3,
						13.6,
						7.9
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						10.7,
						12.8,
						7.5
					],
					"majorationMeuble": 1.2,
					"meuble": [
						11.9,
						14.3,
						8.3
					]
				},
				{
					"secteur": "1",
					"type": "appartement",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12.4,
						14.9,
						8.7
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						16,
						19.2,
						11.2
					],
					"majorationMeuble": 1.8,
					"meuble": [
						17.8,
						21.4,
						12.5
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						15.6,
						18.7,
						10.9
					],
					"majorationMeuble": 1.7,
					"meuble": [
						17.3,
						20.8,
						12.1
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						15.7,
						18.8,
						11
					],
					"majorationMeuble": 1.7,
					"meuble": [
						17.4,
						20.9,
						12.2
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						15.7,
						18.8,
						11
					],
					"majorationMeuble": 1.7,
					"meuble": [
						17.4,
						20.9,
						12.2
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": 1.3,
					"meuble": [
						12.9,
						15.5,
						9
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						11.6,
						13.9,
						8.1
					],
					"majorationMeuble": 1.3,
					"meuble": [
						12.9,
						15.5,
						9
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						12,
						14.4,
						8.4
					],
					"majorationMeuble": 1.3,
					"meuble": [
						13.3,
						16,
						9.3
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						12.7,
						15.2,
						8.9
					],
					"majorationMeuble": 1.4,
					"meuble": [
						14.1,
						16.9,
						9.9
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						10.2,
						12.2,
						7.1
					],
					"majorationMeuble": 1.1,
					"meuble": [
						11.3,
						13.6,
						7.9
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						10.4,
						12.5,
						7.3
					],
					"majorationMeuble": 1.1,
					"meuble": [
						11.5,
						13.8,
						8.1
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						10.1,
						12.1,
						7.1
					],
					"majorationMeuble": 1.1,
					"meuble": [
						11.2,
						13.4,
						7.8
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						10.9,
						13.1,
						7.6
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12.1,
						14.5,
						8.5
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						8.9,
						10.7,
						6.2
					],
					"majorationMeuble": 1,
					"meuble": [
						9.9,
						11.9,
						6.9
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						9.2,
						11,
						6.4
					],
					"majorationMeuble": 1,
					"meuble": [
						10.2,
						12.2,
						7.1
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						9.8,
						11.8,
						6.9
					],
					"majorationMeuble": 1.1,
					"meuble": [
						10.9,
						13.1,
						7.6
					]
				},
				{
					"secteur": "2",
					"type": "appartement",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						10.3,
						12.4,
						7.2
					],
					"majorationMeuble": 1.1,
					"meuble": [
						11.4,
						13.7,
						8
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						15,
						18,
						10.5
					],
					"majorationMeuble": 1.7,
					"meuble": [
						16.7,
						20,
						11.7
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						14.6,
						17.5,
						10.2
					],
					"majorationMeuble": 1.6,
					"meuble": [
						16.2,
						19.4,
						11.3
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						14.6,
						17.5,
						10.2
					],
					"majorationMeuble": 1.6,
					"meuble": [
						16.2,
						19.4,
						11.3
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						14.5,
						17.4,
						10.2
					],
					"majorationMeuble": 1.6,
					"meuble": [
						16.1,
						19.3,
						11.3
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						11.4,
						13.7,
						8
					],
					"majorationMeuble": 1.3,
					"meuble": [
						12.7,
						15.2,
						8.9
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						11.1,
						13.3,
						7.8
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12.3,
						14.8,
						8.6
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12.2,
						14.6,
						8.5
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": 1.4,
					"meuble": [
						13.8,
						16.6,
						9.7
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						9.5,
						11.4,
						6.7
					],
					"majorationMeuble": 1,
					"meuble": [
						10.5,
						12.6,
						7.4
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						10.2,
						12.2,
						7.1
					],
					"majorationMeuble": 1.1,
					"meuble": [
						11.3,
						13.6,
						7.9
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						9.9,
						11.9,
						6.9
					],
					"majorationMeuble": 1.1,
					"meuble": [
						11,
						13.2,
						7.7
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						10.9,
						13.1,
						7.6
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12.1,
						14.5,
						8.5
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						8.8,
						10.6,
						6.2
					],
					"majorationMeuble": 1,
					"meuble": [
						9.8,
						11.8,
						6.9
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						9,
						10.8,
						6.3
					],
					"majorationMeuble": 1,
					"meuble": [
						10,
						12,
						7
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						9.7,
						11.6,
						6.8
					],
					"majorationMeuble": 1.1,
					"meuble": [
						10.8,
						13,
						7.6
					]
				},
				{
					"secteur": "3",
					"type": "appartement",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						10,
						12,
						7
					],
					"majorationMeuble": 1.1,
					"meuble": [
						11.1,
						13.3,
						7.8
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						20.5,
						24.6,
						14.4
					],
					"majorationMeuble": 2.3,
					"meuble": [
						22.8,
						27.4,
						16
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						17.7,
						21.2,
						12.4
					],
					"majorationMeuble": 1.9,
					"meuble": [
						19.6,
						23.5,
						13.7
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						19.9,
						23.9,
						13.9
					],
					"majorationMeuble": 2.2,
					"meuble": [
						22.1,
						26.5,
						15.5
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						18,
						21.6,
						12.6
					],
					"majorationMeuble": 2,
					"meuble": [
						20,
						24,
						14
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						15.7,
						18.8,
						11
					],
					"majorationMeuble": 1.7,
					"meuble": [
						17.4,
						20.9,
						12.2
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						14,
						16.8,
						9.8
					],
					"majorationMeuble": 1.5,
					"meuble": [
						15.5,
						18.6,
						10.9
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						14.1,
						16.9,
						9.9
					],
					"majorationMeuble": 1.6,
					"meuble": [
						15.7,
						18.8,
						11
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						14.6,
						17.5,
						10.2
					],
					"majorationMeuble": 1.6,
					"meuble": [
						16.2,
						19.4,
						11.3
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						13.2,
						15.8,
						9.2
					],
					"majorationMeuble": 1.5,
					"meuble": [
						14.7,
						17.6,
						10.3
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": 1.4,
					"meuble": [
						13.8,
						16.6,
						9.7
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						13,
						15.6,
						9.1
					],
					"majorationMeuble": 1.4,
					"meuble": [
						14.4,
						17.3,
						10.1
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						12.9,
						15.5,
						9
					],
					"majorationMeuble": 1.4,
					"meuble": [
						14.3,
						17.2,
						10
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						11.4,
						13.7,
						8
					],
					"majorationMeuble": 1.3,
					"meuble": [
						12.7,
						15.2,
						8.9
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12.4,
						14.9,
						8.7
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						11.7,
						14,
						8.2
					],
					"majorationMeuble": 1.3,
					"meuble": [
						13,
						15.6,
						9.1
					]
				},
				{
					"secteur": "1",
					"type": "maison",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						12.3,
						14.8,
						8.6
					],
					"majorationMeuble": 1.4,
					"meuble": [
						13.7,
						16.4,
						9.6
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						17.5,
						21,
						12.3
					],
					"majorationMeuble": 1.9,
					"meuble": [
						19.4,
						23.3,
						13.6
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						17.1,
						20.5,
						12
					],
					"majorationMeuble": 1.9,
					"meuble": [
						19,
						22.8,
						13.3
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						17.2,
						20.6,
						12
					],
					"majorationMeuble": 1.9,
					"meuble": [
						19.1,
						22.9,
						13.4
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						17.2,
						20.6,
						12
					],
					"majorationMeuble": 1.9,
					"meuble": [
						19.1,
						22.9,
						13.4
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						12.7,
						15.2,
						8.9
					],
					"majorationMeuble": 1.4,
					"meuble": [
						14.1,
						16.9,
						9.9
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						12.7,
						15.2,
						8.9
					],
					"majorationMeuble": 1.4,
					"meuble": [
						14.1,
						16.9,
						9.9
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						13.1,
						15.7,
						9.2
					],
					"majorationMeuble": 1.4,
					"meuble": [
						14.5,
						17.4,
						10.2
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						13.9,
						16.7,
						9.7
					],
					"majorationMeuble": 1.5,
					"meuble": [
						15.4,
						18.5,
						10.8
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12.4,
						14.9,
						8.7
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						11.4,
						13.7,
						8
					],
					"majorationMeuble": 1.3,
					"meuble": [
						12.7,
						15.2,
						8.9
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						11.1,
						13.3,
						7.8
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12.3,
						14.8,
						8.6
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						11.9,
						14.3,
						8.3
					],
					"majorationMeuble": 1.3,
					"meuble": [
						13.2,
						15.8,
						9.2
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						9.7,
						11.6,
						6.8
					],
					"majorationMeuble": 1.1,
					"meuble": [
						10.8,
						13,
						7.6
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						10.1,
						12.1,
						7.1
					],
					"majorationMeuble": 1.1,
					"meuble": [
						11.2,
						13.4,
						7.8
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						10.7,
						12.8,
						7.5
					],
					"majorationMeuble": 1.2,
					"meuble": [
						11.9,
						14.3,
						8.3
					]
				},
				{
					"secteur": "2",
					"type": "maison",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						11.3,
						13.6,
						7.9
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12.5,
						15,
						8.8
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						16.4,
						19.7,
						11.5
					],
					"majorationMeuble": 1.8,
					"meuble": [
						18.2,
						21.8,
						12.7
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						16,
						19.2,
						11.2
					],
					"majorationMeuble": 1.8,
					"meuble": [
						17.8,
						21.4,
						12.5
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						16,
						19.2,
						11.2
					],
					"majorationMeuble": 1.8,
					"meuble": [
						17.8,
						21.4,
						12.5
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						15.9,
						19.1,
						11.1
					],
					"majorationMeuble": 1.7,
					"meuble": [
						17.6,
						21.1,
						12.3
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						12.5,
						15,
						8.8
					],
					"majorationMeuble": 1.4,
					"meuble": [
						13.9,
						16.7,
						9.7
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": 1.3,
					"meuble": [
						13.5,
						16.2,
						9.5
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						12,
						14.4,
						8.4
					],
					"majorationMeuble": 1.3,
					"meuble": [
						13.3,
						16,
						9.3
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						13.6,
						16.3,
						9.5
					],
					"majorationMeuble": 1.5,
					"meuble": [
						15.1,
						18.1,
						10.6
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						10.4,
						12.5,
						7.3
					],
					"majorationMeuble": 1.1,
					"meuble": [
						11.5,
						13.8,
						8.1
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12.4,
						14.9,
						8.7
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						10.8,
						13,
						7.6
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12,
						14.4,
						8.4
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						11.9,
						14.3,
						8.3
					],
					"majorationMeuble": 1.3,
					"meuble": [
						13.2,
						15.8,
						9.2
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						9.6,
						11.5,
						6.7
					],
					"majorationMeuble": 1.1,
					"meuble": [
						10.7,
						12.8,
						7.5
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						9.9,
						11.9,
						6.9
					],
					"majorationMeuble": 1.1,
					"meuble": [
						11,
						13.2,
						7.7
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						10.6,
						12.7,
						7.4
					],
					"majorationMeuble": 1.2,
					"meuble": [
						11.8,
						14.2,
						8.3
					]
				},
				{
					"secteur": "3",
					"type": "maison",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": 1.2,
					"meuble": [
						12.2,
						14.6,
						8.5
					]
				}
			]
		}
	},
	{
		id: "grenoble",
		nom: "Grenoble-Alpes Métropole (21 communes)",
		arrete: {
			"numero": "38-2026-01-06-00018",
			"signeLe": "2026-01-06",
			"publieLe": "2026-01-13",
			"valideDu": "2026-01-20",
			"valideJusquau": "2026-11-24",
			"url": "https://www.isere.gouv.fr/contenu/telechargement/81348/628581/file/AP_encadr_2026_sign%C3%A9_numero.pdf",
			"page": "https://www.isere.gouv.fr/Actions-de-l-Etat/Amenagement-du-territoire-construction-logement-et-associations-de-proprietaires/Construction-logement/Logement/Encadrement-des-loyers/Application-de-l-encadrement-des-loyers-2026"
		},
		genereLe: "2026-11-12",
		communes: [
			{
				"insee": "38170",
				"nom": "Fontanil-Cornillon",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38516",
				"nom": "La Tronche",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38229",
				"nom": "Meylan",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38150",
				"nom": "Domène",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38271",
				"nom": "Murianette",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38533",
				"nom": "Venon",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38179",
				"nom": "Gières",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38486",
				"nom": "Seyssins",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38158",
				"nom": "Eybens",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38309",
				"nom": "Poisat",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38057",
				"nom": "Bresson",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38111",
				"nom": "Claix",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38524",
				"nom": "Varces-Allières-et-Risset",
				"secteur": "A",
				"couverture": "totale"
			},
			{
				"insee": "38382",
				"nom": "Saint-Égrève",
				"secteurs": ["A"],
				"couverture": "partielle",
				"noteSecteur": "Seules les mailles du carroyage bâti annexé à l'arrêté sont encadrées (atlas au 1/5 000). Logement dans une maille : passer le secteur A. Hors des mailles, le loyer n'est pas encadré."
			},
			{
				"insee": "38474",
				"nom": "Sassenage",
				"secteurs": ["A"],
				"couverture": "partielle",
				"noteSecteur": "Seules les mailles du carroyage bâti annexé à l'arrêté sont encadrées (atlas au 1/5 000). Logement dans une maille : passer le secteur A. Hors des mailles, le loyer n'est pas encadré."
			},
			{
				"insee": "38169",
				"nom": "Fontaine",
				"secteurs": ["A"],
				"couverture": "partielle",
				"noteSecteur": "Seules les mailles du carroyage bâti annexé à l'arrêté sont encadrées (atlas au 1/5 000). Logement dans une maille : passer le secteur A. Hors des mailles, le loyer n'est pas encadré."
			},
			{
				"insee": "38421",
				"nom": "Saint-Martin-d'Hères",
				"secteurs": ["A"],
				"couverture": "partielle",
				"noteSecteur": "Seules les mailles du carroyage bâti annexé à l'arrêté sont encadrées (atlas au 1/5 000). Logement dans une maille : passer le secteur A. Hors des mailles, le loyer n'est pas encadré."
			},
			{
				"insee": "38485",
				"nom": "Seyssinet-Pariset",
				"secteurs": ["A"],
				"couverture": "partielle",
				"noteSecteur": "Seules les mailles du carroyage bâti annexé à l'arrêté sont encadrées (atlas au 1/5 000). Logement dans une maille : passer le secteur A. Hors des mailles, le loyer n'est pas encadré."
			},
			{
				"insee": "38151",
				"nom": "Échirolles",
				"secteurs": ["A"],
				"couverture": "partielle",
				"noteSecteur": "Seules les mailles du carroyage bâti annexé à l'arrêté sont encadrées (atlas au 1/5 000). Logement dans une maille : passer le secteur A. Hors des mailles, le loyer n'est pas encadré."
			},
			{
				"insee": "38317",
				"nom": "Le Pont-de-Claix",
				"secteurs": ["A"],
				"couverture": "partielle",
				"noteSecteur": "Seules les mailles du carroyage bâti annexé à l'arrêté sont encadrées (atlas au 1/5 000). Logement dans une maille : passer le secteur A. Hors des mailles, le loyer n'est pas encadré."
			},
			{
				"insee": "38185",
				"nom": "Grenoble",
				"secteurs": ["1", "2"],
				"couverture": "partielle",
				"noteSecteur": "Seuls les quartiers en zone 1 ou zone 2 de la carte du périmètre sont encadrés (carroyage bâti et atlas annexés à l'arrêté). Passer le secteur 1 ou 2 ; hors de ces zones, le loyer n'est pas encadré."
			}
		],
		zonage: {
			"maille": "carroyage",
			"resolution": "Zone 1 et zone 2 à Grenoble, zone A ailleurs. 13 communes entières ; dans les 8 autres, seules les mailles du carroyage bâti sont encadrées. Pas de couche open data : situer l'adresse sur l'atlas au 1/5 000 (planches 01 à 96).",
			"geodonnees": "https://www.isere.gouv.fr/contenu/telechargement/81380/628743/file/AtlasEncadrementLoyers2026_5000_Batis_VDEF_FondNoirEtBlanc-compress%C3%A9.pdf"
		},
		donnees: {
			"epoques": [
				{
					"cle": "avant-1946",
					"libelle": "avant 1946",
					"de": null,
					"a": 1945
				},
				{
					"cle": "1946-1970",
					"libelle": "1946-1970",
					"de": 1946,
					"a": 1970
				},
				{
					"cle": "1971-1990",
					"libelle": "1971-1990",
					"de": 1971,
					"a": 1990
				},
				{
					"cle": "apres-1990",
					"libelle": "après 1990",
					"de": 1991,
					"a": null
				}
			],
			"source": {
				"url": "https://www.isere.gouv.fr/contenu/telechargement/81347/628576/file/Tableau_loyers%20de%20r%C3%A9f%C3%A9rence_ANIL.pdf",
				"methode": "Tableau ANIL publié par la préfecture avec l'arrêté, transcrit dans scripts/encadrement/transcriptions.",
				"recupereLe": "2026-11-12"
			},
			"lignes": [
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						16.7,
						20,
						11.7
					],
					"majorationMeuble": 1.2,
					"meuble": [
						17.9,
						21.5,
						12.5
					]
				},
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						16.5,
						19.8,
						11.6
					],
					"majorationMeuble": 1.2,
					"meuble": [
						17.7,
						21.2,
						12.4
					]
				},
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						16.4,
						19.7,
						11.5
					],
					"majorationMeuble": 1.1,
					"meuble": [
						17.5,
						21,
						12.3
					]
				},
				{
					"secteur": "1",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						16.5,
						19.8,
						11.6
					],
					"majorationMeuble": 1.2,
					"meuble": [
						17.7,
						21.2,
						12.4
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						12.7,
						15.2,
						8.9
					],
					"majorationMeuble": .9,
					"meuble": [
						13.6,
						16.3,
						9.5
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						12.7,
						15.2,
						8.9
					],
					"majorationMeuble": .9,
					"meuble": [
						13.6,
						16.3,
						9.5
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						13.5,
						16.2,
						9.5
					],
					"majorationMeuble": .9,
					"meuble": [
						14.4,
						17.3,
						10.1
					]
				},
				{
					"secteur": "1",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						14.1,
						16.9,
						9.9
					],
					"majorationMeuble": 1,
					"meuble": [
						15.1,
						18.1,
						10.6
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": .8,
					"meuble": [
						12,
						14.4,
						8.4
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						11.5,
						13.8,
						8.1
					],
					"majorationMeuble": .8,
					"meuble": [
						12.3,
						14.8,
						8.6
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": .8,
					"meuble": [
						12,
						14.4,
						8.4
					]
				},
				{
					"secteur": "1",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						12.1,
						14.5,
						8.5
					],
					"majorationMeuble": .8,
					"meuble": [
						12.9,
						15.5,
						9
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						10.5,
						12.6,
						7.4
					],
					"majorationMeuble": .7,
					"meuble": [
						11.2,
						13.4,
						7.8
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						10.8,
						13,
						7.6
					],
					"majorationMeuble": .8,
					"meuble": [
						11.6,
						13.9,
						8.1
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						10.7,
						12.8,
						7.5
					],
					"majorationMeuble": .7,
					"meuble": [
						11.4,
						13.7,
						8
					]
				},
				{
					"secteur": "1",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": .8,
					"meuble": [
						12,
						14.4,
						8.4
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						14.8,
						17.8,
						10.4
					],
					"majorationMeuble": 1,
					"meuble": [
						15.8,
						19,
						11.1
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						14.6,
						17.5,
						10.2
					],
					"majorationMeuble": 1,
					"meuble": [
						15.6,
						18.7,
						10.9
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						15.8,
						19,
						11.1
					],
					"majorationMeuble": 1.1,
					"meuble": [
						16.9,
						20.3,
						11.8
					]
				},
				{
					"secteur": "2",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						16.9,
						20.3,
						11.8
					],
					"majorationMeuble": 1.2,
					"meuble": [
						18.1,
						21.7,
						12.7
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						12.2,
						14.6,
						8.5
					],
					"majorationMeuble": .9,
					"meuble": [
						13.1,
						15.7,
						9.2
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						11.9,
						14.3,
						8.3
					],
					"majorationMeuble": .8,
					"meuble": [
						12.7,
						15.2,
						8.9
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": .9,
					"meuble": [
						13.3,
						16,
						9.3
					]
				},
				{
					"secteur": "2",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						13,
						15.6,
						9.1
					],
					"majorationMeuble": .9,
					"meuble": [
						13.9,
						16.7,
						9.7
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						10.7,
						12.8,
						7.5
					],
					"majorationMeuble": .7,
					"meuble": [
						11.4,
						13.7,
						8
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						10.5,
						12.6,
						7.4
					],
					"majorationMeuble": .7,
					"meuble": [
						11.2,
						13.4,
						7.8
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": .8,
					"meuble": [
						12,
						14.4,
						8.4
					]
				},
				{
					"secteur": "2",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						11.8,
						14.2,
						8.3
					],
					"majorationMeuble": .8,
					"meuble": [
						12.6,
						15.1,
						8.8
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						9.8,
						11.8,
						6.9
					],
					"majorationMeuble": .7,
					"meuble": [
						10.5,
						12.6,
						7.4
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						10.3,
						12.4,
						7.2
					],
					"majorationMeuble": .7,
					"meuble": [
						11,
						13.2,
						7.7
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						10.2,
						12.2,
						7.1
					],
					"majorationMeuble": .7,
					"meuble": [
						10.9,
						13.1,
						7.6
					]
				},
				{
					"secteur": "2",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						11.2,
						13.4,
						7.8
					],
					"majorationMeuble": .8,
					"meuble": [
						12,
						14.4,
						8.4
					]
				},
				{
					"secteur": "A",
					"pieces": 1,
					"epoque": "avant-1946",
					"vide": [
						14.7,
						17.6,
						10.3
					],
					"majorationMeuble": 1,
					"meuble": [
						15.7,
						18.8,
						11
					]
				},
				{
					"secteur": "A",
					"pieces": 1,
					"epoque": "1946-1970",
					"vide": [
						14.8,
						17.8,
						10.4
					],
					"majorationMeuble": 1,
					"meuble": [
						15.8,
						19,
						11.1
					]
				},
				{
					"secteur": "A",
					"pieces": 1,
					"epoque": "1971-1990",
					"vide": [
						14.9,
						17.9,
						10.4
					],
					"majorationMeuble": 1,
					"meuble": [
						15.9,
						19.1,
						11.1
					]
				},
				{
					"secteur": "A",
					"pieces": 1,
					"epoque": "apres-1990",
					"vide": [
						16.1,
						19.3,
						11.3
					],
					"majorationMeuble": 1.1,
					"meuble": [
						17.2,
						20.6,
						12
					]
				},
				{
					"secteur": "A",
					"pieces": 2,
					"epoque": "avant-1946",
					"vide": [
						12.8,
						15.4,
						9
					],
					"majorationMeuble": .9,
					"meuble": [
						13.7,
						16.4,
						9.6
					]
				},
				{
					"secteur": "A",
					"pieces": 2,
					"epoque": "1946-1970",
					"vide": [
						12.4,
						14.9,
						8.7
					],
					"majorationMeuble": .9,
					"meuble": [
						13.3,
						16,
						9.3
					]
				},
				{
					"secteur": "A",
					"pieces": 2,
					"epoque": "1971-1990",
					"vide": [
						12.6,
						15.1,
						8.8
					],
					"majorationMeuble": .9,
					"meuble": [
						13.5,
						16.2,
						9.5
					]
				},
				{
					"secteur": "A",
					"pieces": 2,
					"epoque": "apres-1990",
					"vide": [
						13.5,
						16.2,
						9.5
					],
					"majorationMeuble": .9,
					"meuble": [
						14.4,
						17.3,
						10.1
					]
				},
				{
					"secteur": "A",
					"pieces": 3,
					"epoque": "avant-1946",
					"vide": [
						11,
						13.2,
						7.7
					],
					"majorationMeuble": .8,
					"meuble": [
						11.8,
						14.2,
						8.3
					]
				},
				{
					"secteur": "A",
					"pieces": 3,
					"epoque": "1946-1970",
					"vide": [
						10.9,
						13.1,
						7.6
					],
					"majorationMeuble": .8,
					"meuble": [
						11.7,
						14,
						8.2
					]
				},
				{
					"secteur": "A",
					"pieces": 3,
					"epoque": "1971-1990",
					"vide": [
						10.8,
						13,
						7.6
					],
					"majorationMeuble": .8,
					"meuble": [
						11.6,
						13.9,
						8.1
					]
				},
				{
					"secteur": "A",
					"pieces": 3,
					"epoque": "apres-1990",
					"vide": [
						12.1,
						14.5,
						8.5
					],
					"majorationMeuble": .8,
					"meuble": [
						12.9,
						15.5,
						9
					]
				},
				{
					"secteur": "A",
					"pieces": 4,
					"epoque": "avant-1946",
					"vide": [
						9.9,
						11.9,
						6.9
					],
					"majorationMeuble": .7,
					"meuble": [
						10.6,
						12.7,
						7.4
					]
				},
				{
					"secteur": "A",
					"pieces": 4,
					"epoque": "1946-1970",
					"vide": [
						9.9,
						11.9,
						6.9
					],
					"majorationMeuble": .7,
					"meuble": [
						10.6,
						12.7,
						7.4
					]
				},
				{
					"secteur": "A",
					"pieces": 4,
					"epoque": "1971-1990",
					"vide": [
						10.6,
						12.7,
						7.4
					],
					"majorationMeuble": .7,
					"meuble": [
						11.3,
						13.6,
						7.9
					]
				},
				{
					"secteur": "A",
					"pieces": 4,
					"epoque": "apres-1990",
					"vide": [
						11.1,
						13.3,
						7.8
					],
					"majorationMeuble": .8,
					"meuble": [
						11.9,
						14.3,
						8.3
					]
				}
			]
		}
	}
];
const CADRE_LEGAL = cadre_legal_default;
const ZONES_TENDUES = {
	texte: texte$2,
	usage,
	valideJusquau,
	remplacement,
	source: donnees$9,
	legifrance,
	recupereLe,
	decretEvolution
};
/** Every territory, with or without figures: what an agent lists when asked where rent control applies. */
const TERRITOIRES_ENCADRES = TERRITOIRES.map((t) => ({
	id: t.id,
	nom: t.nom,
	arrete: t.arrete,
	communes: t.communes.map(({ insee, nom, couverture }) => ({
		insee,
		nom,
		couverture
	})),
	donneesDisponibles: t.donnees !== null,
	raisonSansDonnees: t.raisonSansDonnees ?? null,
	zonage: t.zonage ?? null
}));
const normaliser$1 = (texte) => texte.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[’'\-_]/g, " ").replace(/\s+/g, " ").trim();
const CODE_INSEE$1 = /^(\d{5}|2[ab]\d{3})$/i;
function trouverCommune(saisie) {
	const code = saisie.trim().toUpperCase();
	const nom = normaliser$1(saisie);
	for (const territoire of TERRITOIRES) for (const commune of territoire.communes) {
		if (commune.insee === code || commune.codesArrondissements?.includes(code) || normaliser$1(commune.nom) === nom) return {
			territoire,
			commune
		};
		const ancienne = commune.anciennesCommunes?.find((a) => a.insee === code || normaliser$1(a.nom) === nom);
		if (ancienne) return {
			territoire,
			commune,
			secteurImpose: ancienne.secteur
		};
	}
	return null;
}
/** Paris and Lyon arrondissement codes, which the BAN returns as citycode, map to their commune. */
function codeCommune(insee) {
	const code = insee.trim().toUpperCase();
	if (/^751(0[1-9]|1\d|20)$/.test(code)) return "75056";
	if (/^6938[1-9]$/.test(code)) return "69123";
	if (/^132(0[1-9]|1[0-6])$/.test(code)) return "13055";
	return code;
}
const ZONE_TENDUE = new Set(communes$9.map(([insee]) => insee));
const NOMS_ZONE_TENDUE = new Set(communes$9.map(([, nom]) => normaliser$1(nom)));
/** In the décret n° 2013-392 annex 1° list: 1-month notice, rent rise capped at relocation. */
function estZoneTendue(insee) {
	return ZONE_TENDUE.has(codeCommune(insee));
}
/** In the perimeter of a rent control arrêté. Grenoble's 8 partial communes return true: check the carroyage. */
function estEncadree(insee) {
	return CODE_INSEE$1.test(insee.trim()) && trouverCommune(insee) !== null;
}
function refus(raison, message, territoire, options) {
	return {
		ok: false,
		raison,
		message,
		...territoire ? { territoire: {
			id: territoire.id,
			nom: territoire.nom,
			arrete: territoire.arrete
		} } : {},
		...options ? { options } : {}
	};
}
/** Grenoble names a sector "A": "Zone A" reads as "A", "zone 02" as "2". */
const cleDeSecteur = (valeur) => {
	const texte = String(valeur).trim();
	const lettre = /^(?:zone|secteur)?\s*([a-z])$/i.exec(texte)?.[1];
	if (lettre) return lettre.toUpperCase();
	return texte.match(/\d+/)?.[0]?.replace(/^0+(?=\d)/, "") ?? "";
};
function resoudreSecteur(demande, { territoire, commune, secteurImpose }) {
	const candidats = /* @__PURE__ */ new Set();
	const fixe = secteurImpose ?? commune.secteur;
	if (fixe) candidats.add(fixe);
	if (demande.secteur !== void 0) candidats.add(cleDeSecteur(demande.secteur));
	if (demande.quartier !== void 0) {
		const q = territoire.quartiers?.find((x) => String(x.numero) === String(demande.quartier).trim() || normaliser$1(x.nom) === normaliser$1(String(demande.quartier)));
		if (!q) return refus("secteur-inconnu", `Quartier inconnu pour ${territoire.nom} : ${demande.quartier}.`, territoire);
		candidats.add(q.secteur);
	}
	if (demande.iris !== void 0) {
		const s = territoire.iris?.[demande.iris.trim()];
		if (!s) return refus("secteur-inconnu", `IRIS inconnu pour ${territoire.nom} : ${demande.iris}.`, territoire);
		candidats.add(s);
	}
	if (candidats.size > 1) return refus("parametre-invalide", `Secteurs contradictoires pour ${commune.nom} : ${[...candidats].join(", ")}.`, territoire);
	const [secteur] = candidats;
	const permis = commune.secteurs ?? (commune.secteur ? [commune.secteur] : [...new Set(territoire.donnees?.lignes.map((l) => l.secteur))]);
	if (!secteur) {
		const aide = territoire.quartiers ? "Indiquer le quartier (numéro ou nom) ou le secteur." : commune.noteSecteur ?? territoire.zonage?.resolution ?? "";
		const constat = commune.couverture === "partielle" ? "n'est encadrée que sur une partie de son territoire, la commune seule ne dit pas si ce logement l'est." : "a plusieurs secteurs.";
		return refus("secteur-requis", `${commune.nom} ${constat} ${aide}`, territoire, permis);
	}
	if (!permis.includes(secteur)) return refus("secteur-inconnu", `Secteur ${secteur} inconnu pour ${commune.nom}.`, territoire, permis);
	return secteur;
}
function resoudreEpoque(saisie, epoques) {
	if (typeof saisie === "number" || /^\d{4}$/.test(saisie.trim())) {
		const annee = Number(saisie);
		return epoques.find((e) => (e.de === null || annee >= e.de) && (e.a === null || annee <= e.a)) ?? null;
	}
	const texte = normaliser$1(saisie).replace(/^</, "avant ").replace(/^>/, "apres ").replace(/\s+/g, " ");
	return epoques.find((e) => normaliser$1(e.cle) === texte || normaliser$1(e.libelle) === texte) ?? null;
}
const enDate = (d) => (d === void 0 ? /* @__PURE__ */ new Date() : new Date(d)).toISOString().slice(0, 10);
const centimes = (n) => Math.round(n * 100) / 100;
/** Reference, majoré (the cap) and minoré rents for one home, from the arrêté in force. */
function plafondLoyer(demande) {
	const trouvee = trouverCommune(demande.commune);
	if (!trouvee) {
		const saisie = demande.commune.trim();
		if (!(CODE_INSEE$1.test(saisie) || NOMS_ZONE_TENDUE.has(normaliser$1(saisie)))) return refus("commune-inconnue", `Commune introuvable : ${saisie}. Passer son code INSEE.`);
		return refus("hors-encadrement", (CODE_INSEE$1.test(saisie) ? estZoneTendue(saisie) : true) ? `${saisie} n'applique pas l'encadrement des loyers, mais elle est en zone tendue : à la relocation, le loyer ne peut pas dépasser l'ancien révisé selon l'IRL (décret n° 2017-1198).` : `${saisie} n'applique pas l'encadrement des loyers et n'est pas en zone tendue.`);
	}
	const { territoire, commune } = trouvee;
	if (!territoire.donnees) return refus("donnees-indisponibles", `${territoire.nom} : ${territoire.raisonSansDonnees ?? "données absentes."}`, territoire);
	if (!Number.isInteger(demande.pieces) || demande.pieces < 1) return refus("parametre-invalide", "Le nombre de pièces principales doit être un entier supérieur ou égal à 1.", territoire);
	if (demande.surface !== void 0 && !(demande.surface > 0)) return refus("parametre-invalide", "La surface habitable doit être positive.", territoire);
	const secteur = resoudreSecteur(demande, trouvee);
	if (typeof secteur !== "string") return secteur;
	const epoque = resoudreEpoque(demande.epoque, territoire.donnees.epoques);
	if (!epoque) return refus("parametre-invalide", `Époque de construction illisible : ${demande.epoque}.`, territoire, territoire.donnees.epoques.map((e) => e.cle));
	const pieces = Math.min(demande.pieces, 4);
	const candidates = territoire.donnees.lignes.filter((l) => l.secteur === secteur && l.pieces === pieces && l.epoque === epoque.cle);
	const typees = candidates.some((l) => l.type);
	if (typees && !demande.typeLogement) return refus("type-logement-requis", `${territoire.nom}, secteur ${secteur} : les loyers diffèrent entre maison et appartement.`, territoire, ["appartement", "maison"]);
	const ligne = typees ? candidates.find((l) => l.type === demande.typeLogement) : candidates[0];
	if (!ligne) return refus("secteur-inconnu", `Aucune catégorie pour le secteur ${secteur}.`, territoire);
	const [reference, majore, minore] = demande.meuble ? ligne.meuble : ligne.vide;
	const date = enDate(demande.date);
	const { arrete } = territoire;
	const perime = date > arrete.valideJusquau;
	const avertissements = [];
	if (perime) avertissements.push(`L'arrêté ${arrete.numero} ne s'applique plus après le ${arrete.valideJusquau}. ${CADRE_LEGAL.prolongation.resume} (vérifié le ${CADRE_LEGAL.prolongation.verifieLe}).`);
	if (date < arrete.valideDu) avertissements.push(`L'arrêté ${arrete.numero} vaut pour les baux signés à partir du ${arrete.valideDu} : un bail antérieur relève de l'arrêté précédent.`);
	if (commune.couverture === "partielle") avertissements.push(`${commune.nom} n'est encadrée que sur une partie de son territoire.`);
	return {
		ok: true,
		territoire: {
			id: territoire.id,
			nom: territoire.nom
		},
		commune: {
			insee: commune.insee,
			nom: commune.nom
		},
		secteur,
		categorie: {
			pieces: pieces === 4 ? "4 et plus" : String(pieces),
			epoque: epoque.libelle,
			meuble: demande.meuble,
			typeLogement: ligne.type ?? null
		},
		parM2: {
			reference,
			majore,
			minore
		},
		pourSurface: demande.surface === void 0 ? null : {
			surface: demande.surface,
			reference: centimes(reference * demande.surface),
			majore: centimes(majore * demande.surface),
			minore: centimes(minore * demande.surface)
		},
		majorationMeubleParM2: ligne.majorationMeuble,
		arrete,
		source: territoire.donnees.source,
		valideJusquau: arrete.valideJusquau,
		perime,
		avertissements
	};
}
// src/lib/skills/cli.ts
const AVERTISSEMENT = "Information générale calculée avec les règles citées, pas un conseil fiscal ou juridique personnalisé.";
/** A wrong input: the script prints the message in French and exits with code 2. */
var SaisieInvalide = class extends Error {};
/** Cents to euros, exact to the cent. */
const euros = (centimes) => Math.round(centimes) / 100;
function lu(e, cle, garde, type) {
	const v = e[cle];
	if (!garde(v)) throw new Error(`Le champ ${cle} n'est pas ${type}.`);
	return v;
}
const estNombre = (v) => typeof v === "number";
const nombre = (e, cle) => lu(e, cle, estNombre, "un nombre");
const texte = (e, cle) => lu(e, cle, (v) => typeof v === "string", "un texte");
const booleen = (e, cle) => lu(e, cle, (v) => typeof v === "boolean", "oui ou non");
const camel = (nom) => nom.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const kebab = (nom) => nom.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
function lireNombre(champ, brut) {
	const n = typeof brut === "number" ? brut : typeof brut === "string" && brut.trim() !== "" ? Number(brut.replace(/[\s  €%]/g, "").replace(",", ".")) : NaN;
	if (!Number.isFinite(n)) throw new SaisieInvalide(`--${kebab(champ.nom)} attend un nombre, reçu « ${String(brut)} ».`);
	const min = champ.min ?? (champ.type === "euros" ? 0 : void 0);
	if (min !== void 0 && n < min) throw new SaisieInvalide(`--${kebab(champ.nom)} doit valoir au moins ${min}, reçu ${n}.`);
	if (champ.max !== void 0 && n > champ.max) throw new SaisieInvalide(`--${kebab(champ.nom)} doit valoir au plus ${champ.max}, reçu ${n}.`);
	return n;
}
function lireValeur(champ, brut) {
	if (brut === null) return null;
	const nom = `--${kebab(champ.nom)}`;
	switch (champ.type) {
		case "euros": return Math.round(lireNombre(champ, brut) * 100) / 100;
		case "nombre": return lireNombre(champ, brut);
		case "booleen":
			if (brut === true || brut === "true" || brut === "oui" || brut === "") return true;
			if (brut === false || brut === "false" || brut === "non") return false;
			throw new SaisieInvalide(`${nom} attend oui ou non (true ou false), reçu « ${String(brut)} ».`);
		case "date": {
			const texte = String(brut);
			const d = /* @__PURE__ */ new Date(`${texte}T00:00:00Z`);
			if (!/^\d{4}-\d{2}-\d{2}$/.test(texte) || d.toISOString().slice(0, 10) !== texte) throw new SaisieInvalide(`${nom} attend une date AAAA-MM-JJ, reçu « ${texte} ».`);
			return texte;
		}
		case "liste": {
			const liste = Array.isArray(brut) ? brut.map(String) : String(brut).split(",").map((s) => s.trim()).filter(Boolean);
			const hors = champ.choix ? liste.filter((x) => !champ.choix?.includes(x)) : [];
			if (hors.length > 0) throw new SaisieInvalide(`${nom} : ${hors.join(", ")} inconnu. Valeurs possibles : ${champ.choix?.join(", ")}.`);
			return liste;
		}
		case "texte": {
			const texte = String(brut).trim();
			if (champ.choix && !champ.choix.includes(texte)) throw new SaisieInvalide(`${nom} attend ${champ.choix.join(", ")}, reçu « ${texte} ».`);
			return texte;
		}
	}
}
/** Flags (`--prix 200000`, `--prix=200000`, a bare `--exception`) and `--json '{...}'` into one checked input. */
function lireArguments(outil, argv) {
	const brut = {};
	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i];
		if (!arg.startsWith("--")) throw new SaisieInvalide(`Argument inattendu « ${arg} ». Lancez --help pour la liste.`);
		const [tete, ...reste] = arg.slice(2).split("=");
		const enLigne = reste.length > 0 ? reste.join("=") : void 0;
		const suivant = argv[i + 1];
		const prendSuivant = enLigne === void 0 && suivant !== void 0 && !suivant.startsWith("--");
		const valeur = enLigne ?? (prendSuivant ? suivant : "");
		if (prendSuivant) i++;
		if (tete === "json") {
			let objet;
			try {
				objet = JSON.parse(valeur);
			} catch {
				throw new SaisieInvalide("--json attend un objet JSON valide, entre apostrophes.");
			}
			if (typeof objet !== "object" || objet === null || Array.isArray(objet)) throw new SaisieInvalide("--json attend un objet JSON, par exemple '{\"prix\": 200000}'.");
			for (const [cle, v] of Object.entries(objet)) brut[camel(cle)] = v;
		} else brut[camel(tete)] = valeur;
	}
	const connus = new Set(outil.champs.map((c) => c.nom));
	const inconnus = Object.keys(brut).filter((k) => !connus.has(k));
	if (inconnus.length > 0) throw new SaisieInvalide(`Champ inconnu : ${inconnus.map((k) => `--${kebab(k)}`).join(", ")}. Lancez --help pour la liste.`);
	const entree = {};
	for (const champ of outil.champs) if (brut[champ.nom] === void 0) {
		if (champ.defaut === void 0) throw new SaisieInvalide(`--${kebab(champ.nom)} manque : ${champ.aide}`);
		entree[champ.nom] = champ.defaut;
	} else entree[champ.nom] = lireValeur(champ, brut[champ.nom]);
	return entree;
}
function aide(outil) {
	const lignes = outil.champs.map((c) => {
		const unite = c.unite ? ` (${c.unite})` : "";
		const choix = c.choix ? ` Valeurs : ${c.choix.join(", ")}.` : "";
		const defaut = c.defaut === void 0 ? " Obligatoire." : c.defaut === null ? " Facultatif." : ` Par défaut : ${Array.isArray(c.defaut) ? c.defaut.join(",") || "aucun" : String(c.defaut)}.`;
		return `  --${kebab(c.nom)}${unite}\n      ${c.aide}${choix}${defaut}`;
	});
	return [
		`${outil.nom}.mjs : ${outil.resume}`,
		"",
		`Usage : node ${outil.nom}.mjs [--champ valeur ...] | --json '{"champ": valeur}'`,
		"Montants en euros, en entrée comme en sortie. Sortie : JSON sur la sortie standard.",
		"",
		"Champs :",
		...lignes,
		"",
		"Exemple :",
		`  node ${outil.nom}.mjs ${outil.exemple}`,
		"",
		AVERTISSEMENT
	].join("\n");
}
/** The whole run, `--help` included. Returns the exit code instead of exiting, so a test can call it. */
function executer(outil, argv, ecrire, erreur) {
	if (argv.includes("--help") || argv.includes("-h")) {
		ecrire(aide(outil));
		return 0;
	}
	try {
		const entree = lireArguments(outil, argv);
		const { resultat, regles } = outil.calculer(entree);
		const sortie = {
			entree,
			resultat,
			regles: {
				...regles,
				sources: [...new Set(regles.sources)]
			},
			avertissement: AVERTISSEMENT
		};
		ecrire(JSON.stringify(sortie, null, 2));
		return 0;
	} catch (e) {
		if (e instanceof SaisieInvalide) {
			erreur(`Erreur : ${e.message}`);
			return 2;
		}
		erreur(`Erreur de calcul : ${e instanceof Error ? e.message : String(e)}`);
		return 1;
	}
}
/** The entry point of a bundled script. */
function lancer(outil) {
	process.exitCode = executer(outil, process.argv.slice(2), (t) => process.stdout.write(`${t}\n`), (t) => process.stderr.write(`${t}\n`));
}
// src/lib/skills/plafond-loyer.ts
const ENCADREMENT = CADRE_LEGAL.texte;
const COMPLEMENT = "Loi n° 89-462 du 6 juillet 1989, art. 17, II, B (complément de loyer)";
const CODE_INSEE = /^(\d{5}|2[ab]\d{3})$/i;
const normaliser = (t) => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[’'\-_]/g, " ").replace(/\s+/g, " ").trim();
/** The INSEE code behind a code or a commune name, so the zone tendue and perimeter checks can run on either. */
function inseeDe(saisie) {
	if (CODE_INSEE.test(saisie.trim())) return saisie.trim().toUpperCase();
	const nom = normaliser(saisie);
	for (const t of TERRITOIRES_ENCADRES) for (const c of t.communes) if (normaliser(c.nom) === nom) return c.insee;
	return communes$9.find(([, n]) => normaliser(n) === nom)?.[0] ?? null;
}
const dateFr = (iso) => (/* @__PURE__ */ new Date(`${iso}T00:00:00Z`)).toLocaleDateString("fr-FR", {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
	timeZone: "UTC"
});
const eur = (n) => `${n.toLocaleString("fr-FR", {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
})} €`;
/** Plain words first when the arrêté has lapsed: its figures are history, not a cap in force. */
function phrasePerime(arrete, nom, date, chiffres) {
	const p = CADRE_LEGAL.prolongation;
	return `Attention : l'arrêté d'encadrement des loyers ${arrete.numero} (${nom}) ne s'applique plus après le ${dateFr(arrete.valideJusquau)}. Pour un bail signé le ${dateFr(date)}, aucun plafond d'encadrement ne s'impose tant qu'une loi de prolongation n'est pas votée et publiée. ${p.resume} Situation vérifiée le ${dateFr(p.verifieLe)} : avant de signer, vérifier ${p.source} .${chiffres ? " Les chiffres plus bas sont les derniers publiés, à titre indicatif seulement." : ""}`;
}
const SECTEUR = {
	paris: "--quartier ou --secteur",
	"lyon-villeurbanne": "--secteur ou --iris"
};
/** Which flag a refusal is about, so the message tells the user what to add. */
function drapeau(r) {
	if (r.raison === "commune-inconnue") return "--commune";
	if (r.raison === "type-logement-requis") return "--type";
	if (r.raison === "secteur-requis" || r.raison === "secteur-inconnu") return SECTEUR[r.territoire?.id ?? ""] ?? "--secteur";
	return r.message.startsWith("Époque") ? "--epoque" : null;
}
function refuser(r) {
	const flag = drapeau(r);
	const valeurs = r.options?.length ? ` Valeurs possibles : ${r.options.join(", ")}.` : "";
	throw new SaisieInvalide(`${flag ? `${flag} : ` : ""}${r.message}${valeurs}`);
}
function comparer(loyer, p, enVigueur) {
	if (loyer === null || p.pourSurface === null) return null;
	const { majore, surface } = p.pourSurface;
	const ecart = euros(Math.round(loyer * 100) - Math.round(majore * 100));
	const depasse = ecart > 0;
	const plafond = enVigueur ? "le loyer de référence majoré" : "le dernier loyer de référence majoré publié";
	return {
		loyer,
		loyerParM2: euros(Math.round(loyer / surface * 100)),
		majore,
		depasse,
		ecartMensuel: ecart,
		phrase: depasse ? `Le loyer de ${eur(loyer)} hors charges dépasse ${plafond} (${eur(majore)} pour ${surface} m²) de ${eur(ecart)} par mois.${enVigueur ? " Au-delà, seul un complément de loyer justifié par des caractéristiques exceptionnelles du logement peut s'ajouter, et il doit figurer à part dans le bail." : ""}` : `Le loyer de ${eur(loyer)} hors charges reste sous ${plafond} (${eur(majore)} pour ${surface} m²), avec ${eur(-ecart)} de marge par mois.`
	};
}
lancer({
	nom: "plafond-loyer",
	resume: "loyer de référence, majoré (le plafond) et minoré d'un logement dans une ville à encadrement des loyers, d'après l'arrêté préfectoral daté.",
	champs: [
		{
			nom: "commune",
			type: "texte",
			aide: "Code INSEE (arrondissement de Paris ou de Lyon accepté) ou nom de la commune."
		},
		{
			nom: "quartier",
			type: "texte",
			defaut: null,
			aide: "Paris : quartier administratif, numéro de 1 à 80 ou nom."
		},
		{
			nom: "secteur",
			type: "texte",
			defaut: null,
			aide: "Secteur ou zone de l'arrêté (1, « Zone 2 », « A » pour l'agglomération grenobloise...), quand la ville en a plusieurs."
		},
		{
			nom: "iris",
			type: "texte",
			defaut: null,
			aide: "Lyon et Villeurbanne : code IRIS à 9 chiffres, à la place du secteur."
		},
		{
			nom: "pieces",
			type: "nombre",
			min: 1,
			aide: "Nombre de pièces principales (4 et plus partagent une même ligne)."
		},
		{
			nom: "epoque",
			type: "texte",
			aide: "Année de construction (1930) ou période de l'arrêté (avant-1946, 1946-1970, 1971-1990, apres-1990 ; Lyon et Montpellier : 1991-2005, apres-2005)."
		},
		{
			nom: "meuble",
			type: "booleen",
			defaut: true,
			aide: "Logement loué meublé. Non : les loyers du vide."
		},
		{
			nom: "type",
			type: "texte",
			choix: ["appartement", "maison"],
			defaut: null,
			aide: "Appartement ou maison, là où l'arrêté les distingue (Bordeaux, Plaine Commune, Est Ensemble)."
		},
		{
			nom: "surface",
			type: "nombre",
			unite: "m²",
			min: 1,
			defaut: null,
			aide: "Surface habitable, pour les loyers mensuels du logement."
		},
		{
			nom: "loyer",
			type: "euros",
			unite: "€/mois",
			defaut: null,
			aide: "Loyer proposé hors charges, comparé au plafond majoré. Demande --surface."
		},
		{
			nom: "date",
			type: "date",
			defaut: null,
			aide: "Date de signature du bail, AAAA-MM-JJ. Absent : aujourd'hui."
		}
	],
	exemple: "--commune 75111 --quartier 42 --pieces 2 --epoque 1930 --surface 38 --loyer 1250 --date 2026-11-15",
	calculer(e) {
		const saisie = texte(e, "commune");
		const pieces = nombre(e, "pieces");
		if (!Number.isInteger(pieces)) throw new SaisieInvalide("--pieces attend un nombre entier.");
		const surface = e.surface === null ? void 0 : nombre(e, "surface");
		const loyer = e.loyer === null ? null : nombre(e, "loyer");
		if (loyer !== null && surface === void 0) throw new SaisieInvalide("--loyer se compare au plafond du logement entier : ajouter --surface en m².");
		const date = typeof e.date === "string" ? e.date : (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
		const optionnel = (cle) => e[cle] === null ? void 0 : texte(e, cle);
		const type = optionnel("type");
		const r = plafondLoyer({
			commune: saisie,
			quartier: optionnel("quartier"),
			secteur: optionnel("secteur"),
			iris: optionnel("iris"),
			pieces,
			epoque: texte(e, "epoque"),
			meuble: booleen(e, "meuble"),
			typeLogement: type === "appartement" || type === "maison" ? type : void 0,
			surface,
			date
		});
		const insee = r.ok ? r.commune.insee : inseeDe(saisie);
		const zoneTendue = insee !== null && estZoneTendue(insee);
		const encadree = insee !== null && estEncadree(insee);
		const regles = (sources) => ({ regles: {
			annee: Number(date.slice(0, 4)),
			sources
		} });
		if (!r.ok) {
			if (r.raison === "hors-encadrement") return {
				resultat: {
					encadree: false,
					zoneTendue,
					message: r.message
				},
				...regles([
					ENCADREMENT,
					ZONES_TENDUES.texte,
					ZONES_TENDUES.legifrance
				])
			};
			if (r.raison === "donnees-indisponibles" && r.territoire) {
				const { arrete, nom, id } = r.territoire;
				const perime = date > arrete.valideJusquau;
				const territoire = TERRITOIRES_ENCADRES.find((t) => t.id === id);
				const commune = territoire?.communes.find((c) => c.insee === insee);
				return {
					resultat: {
						perime,
						message: [
							perime ? phrasePerime(arrete, nom, date, false) : null,
							`${nom} encadre les loyers par l'arrêté ${arrete.numero}, mais ses chiffres ne sont pas encore repris ici. ${territoire?.raisonSansDonnees ?? ""}`,
							commune?.couverture === "partielle" ? `${commune.nom} n'est encadrée que sur une partie de son territoire : vérifier l'adresse sur la carte annexée à l'arrêté.` : null,
							`Lire les plafonds dans l'arrêté : ${arrete.url}`
						].filter(Boolean).join(" "),
						encadree,
						zoneTendue,
						territoire: nom,
						arrete,
						sourceArrete: arrete.url,
						valideJusquau: arrete.valideJusquau
					},
					...regles([
						ENCADREMENT,
						arrete.url,
						...perime ? [CADRE_LEGAL.prolongation.source] : []
					])
				};
			}
			refuser(r);
		}
		const chiffres = {
			categorie: r.categorie,
			secteur: r.secteur,
			parM2: r.parM2,
			pourSurface: r.pourSurface,
			majorationMeubleParM2: r.majorationMeubleParM2,
			loyerPropose: comparer(loyer, r, !r.perime)
		};
		const { arrete } = r;
		return {
			resultat: {
				perime: r.perime,
				message: r.perime ? phrasePerime(arrete, r.territoire.nom, date, true) : `Plafond fixé par l'arrêté ${arrete.numero}, pour les baux signés du ${dateFr(arrete.valideDu)} au ${dateFr(arrete.valideJusquau)}.`,
				encadree,
				zoneTendue,
				territoire: r.territoire.nom,
				commune: r.commune,
				...r.perime ? { derniersChiffresPublies: chiffres } : { plafond: chiffres },
				arrete,
				sourceArrete: arrete.url,
				valideJusquau: r.valideJusquau,
				avertissements: r.avertissements
			},
			...regles([
				ENCADREMENT,
				arrete.url,
				r.source.url,
				...chiffres.loyerPropose?.depasse ? [COMPLEMENT] : [],
				...r.perime ? [CADRE_LEGAL.prolongation.source] : []
			])
		};
	}
});
export {};
