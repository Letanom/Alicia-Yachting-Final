import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Anchor, Waves, Hammer, MapPin, Heart } from 'lucide-react';

const GuletCulture: React.FC = () => {
  const { language } = useLanguage();

  const sections = [
    {
      icon: <Anchor className="w-8 h-8 text-blue-600" />,
      title: language === 'tr' ? 'Gelenekten Doğan Bir Denizcilik Kültürü' : 'A Maritime Culture Born from Tradition',
      content: language === 'tr' 
        ? 'Bodrum guleti, Türk denizciliğinin en tanınan sembollerinden biridir. Ege kıyılarında doğmuş bu özel tekneler, el işçiliğiyle inşa edilen tamamen ahşap gövdeleriyle dikkat çeker. Zamanında balıkçılık ve yük taşımacılığı amacıyla kullanılan guletler, bugün konforlu donanımlarıyla mavi yolculuğun vazgeçilmez bir parçası haline gelmiştir.'
        : 'The Bodrum gulet is one of the most recognized symbols of Turkish seafaring. These special yachts, born along the Aegean coasts, attract attention with their entirely wooden hulls crafted by hand. Gulets, once used for fishing and cargo transport, have now become an indispensable part of blue cruises with their comfortable amenities.'
    },
    {
      icon: <Waves className="w-8 h-8 text-blue-600" />,
      title: language === 'tr' ? 'Tasarım ve Konfor' : 'Design and Comfort',
      content: language === 'tr'
        ? 'Guletler, geleneksel hatlarını korurken modern yat teknolojisiyle birleşen özgün tasarımlara sahiptir. Genellikle 15 ila 40 metre arasında değişen uzunluklarıyla, hem küçük gruplara hem de kalabalık misafirlere uygun seçenekler sunarlar. Kabinlerde klima, özel banyo, sıcak su gibi tüm konfor unsurları bulunur. Geniş güverteleri, yemek alanları ve güneşlenme bölümleri sayesinde denizde geçirilen her an, bir tatil deneyiminden çok daha fazlasına dönüşür.'
        : 'Gulets feature original designs that combine traditional lines with modern yacht technology. With lengths typically ranging from 15 to 40 meters, they offer options suitable for both small groups and large guests. All comfort features such as air conditioning, private bathrooms, and hot water are found in the cabins. Thanks to their spacious decks, dining areas, and sunbathing sections, every moment spent at sea becomes much more than just a vacation experience.'
    },
    {
      icon: <Hammer className="w-8 h-8 text-blue-600" />,
      title: language === 'tr' ? 'El İşçiliği ve Üretim Süreci' : 'Handicraft and Production Process',
      content: language === 'tr'
        ? 'Bir Bodrum guleti, sabır ve ustalığın birleşimidir. Yapımında seçilen ahşaplar özenle kurutulur, her parça tek tek elde işlenir. Deniz koşullarına dayanıklı olacak şekilde kalafatlanır ve geleneksel yöntemlerle monte edilir. Bu nedenle her gulet aslında biriciktir; aynı ölçüde iki gulet bulmak neredeyse imkânsızdır.'
        : 'A Bodrum gulet is a combination of patience and craftsmanship. The selected woods are carefully dried during construction, and each piece is hand-worked individually. They are caulked to withstand sea conditions and assembled using traditional methods. Therefore, each gulet is actually unique; finding two gulets of the same size is almost impossible.'
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: language === 'tr' ? 'Kullanım Alanları' : 'Areas of Use',
      content: language === 'tr'
        ? 'Günümüzde Bodrum guletleri en çok özel kiralama, mavi tur ve özel etkinlik organizasyonlarında tercih edilmektedir. Ege ve Akdeniz koylarını keşfetmek, doğayla iç içe ama aynı zamanda konforlu bir tatil geçirmek isteyen misafirler için idealdir. Ayrıca birçok gulet, özel davetler, film çekimleri ve kurumsal etkinliklerde de kullanılmaktadır.'
        : 'Today, Bodrum gulets are most preferred for private charters, blue tours, and special event organizations. They are ideal for guests who want to explore the bays of the Aegean and Mediterranean, surrounded by nature while enjoying a comfortable vacation. Many gulets are also used for private invitations, film shootings, and corporate events.'
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: language === 'tr' ? 'Bodrum\'un Denizcilikteki Yeri' : 'Bodrum\'s Place in Seafaring',
      content: language === 'tr'
        ? 'Gulet üretimi denince akla ilk gelen yer Bodrum\'dur. Yarım yüzyılı aşkın bir süredir Bodrum tersanelerinde usta eller tarafından inşa edilen bu tekneler, kalite ve güvenilirlikleriyle dünya genelinde tanınmaktadır. Bodrum guleti ifadesi, bugün sadece bir tekne tipini değil, aynı zamanda Türk ustalığını, deniz sevgisini ve Ege kültürünü temsil etmektedir.'
        : 'When it comes to gulet production, the first place that comes to mind is Bodrum. These vessels, built by master hands in Bodrum shipyards for over half a century, are recognized worldwide for their quality and reliability. The term "Bodrum gulet" today represents not only a type of vessel, but also Turkish craftsmanship, love of the sea, and Aegean culture.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'tr' ? 'Bodrum Gulet Kültürü' : 'Bodrum Gulet Culture'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'tr' 
              ? 'Geçmişin denizcilik geleneğini günümüz konfor anlayışıyla buluşturan nadir değerler'
              : 'Rare values that bring together the maritime traditions of the past with today\'s comfort concept'
            }
          </p>
        </div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                {section.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-red-500 fill-current" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'tr' ? 'Sonuç' : 'Conclusion'}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {language === 'tr'
                ? 'Bodrum guletleri, geçmişin denizcilik geleneğini günümüz konfor anlayışıyla buluşturan nadir değerlerdendir. Hem estetik hem de işlevsel yapılarıyla, Türk yat turizminin en önemli unsurlarından biri olmayı sürdürmektedir. Ahşabın sıcaklığı, denizin mavisi ve Bodrum\'un ruhu… Hepsi bir araya geldiğinde ortaya çıkan şey, sadece bir tekne değil; yaşayan bir mirastır.'
                : 'Bodrum gulets are rare values that bring together the maritime traditions of the past with today\'s comfort concept. With both their aesthetic and functional structures, they continue to be one of the most important elements of Turkish yacht tourism. The warmth of wood, the blue of the sea, and the spirit of Bodrum... What emerges when all these come together is not just a vessel, but a living heritage.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuletCulture;