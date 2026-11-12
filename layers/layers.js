ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32630").setExtent([647317.445033, 1360417.488991, 663582.550044, 1372162.829692]);
var wms_layers = [];

var format_Pays_0 = new ol.format.GeoJSON();
var features_Pays_0 = format_Pays_0.readFeatures(json_Pays_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Pays_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pays_0.addFeatures(features_Pays_0);
var lyr_Pays_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pays_0, 
                style: style_Pays_0,
                popuplayertitle: 'Pays',
                interactive: true,
                title: '<img src="styles/legend/Pays_0.png" /> Pays'
            });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Voirieurbaine_3 = new ol.format.GeoJSON();
var features_Voirieurbaine_3 = format_Voirieurbaine_3.readFeatures(json_Voirieurbaine_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Voirieurbaine_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voirieurbaine_3.addFeatures(features_Voirieurbaine_3);
var lyr_Voirieurbaine_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voirieurbaine_3, 
                style: style_Voirieurbaine_3,
                popuplayertitle: 'Voirie urbaine',
                interactive: true,
                title: '<img src="styles/legend/Voirieurbaine_3.png" /> Voirie urbaine'
            });
var format_Voirieurbainedesardtconcerns_4 = new ol.format.GeoJSON();
var features_Voirieurbainedesardtconcerns_4 = format_Voirieurbainedesardtconcerns_4.readFeatures(json_Voirieurbainedesardtconcerns_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Voirieurbainedesardtconcerns_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voirieurbainedesardtconcerns_4.addFeatures(features_Voirieurbainedesardtconcerns_4);
var lyr_Voirieurbainedesardtconcerns_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voirieurbainedesardtconcerns_4, 
                style: style_Voirieurbainedesardtconcerns_4,
                popuplayertitle: 'Voirie urbaine des ardt concernés',
                interactive: true,
                title: '<img src="styles/legend/Voirieurbainedesardtconcerns_4.png" /> Voirie urbaine des ardt concernés'
            });
var format_Autrearrondissement_5 = new ol.format.GeoJSON();
var features_Autrearrondissement_5 = format_Autrearrondissement_5.readFeatures(json_Autrearrondissement_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Autrearrondissement_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autrearrondissement_5.addFeatures(features_Autrearrondissement_5);
var lyr_Autrearrondissement_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autrearrondissement_5, 
                style: style_Autrearrondissement_5,
                popuplayertitle: 'Autre arrondissement',
                interactive: true,
                title: '<img src="styles/legend/Autrearrondissement_5.png" /> Autre arrondissement'
            });
var format_Arrondissementdtude_6 = new ol.format.GeoJSON();
var features_Arrondissementdtude_6 = format_Arrondissementdtude_6.readFeatures(json_Arrondissementdtude_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Arrondissementdtude_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arrondissementdtude_6.addFeatures(features_Arrondissementdtude_6);
var lyr_Arrondissementdtude_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arrondissementdtude_6, 
                style: style_Arrondissementdtude_6,
                popuplayertitle: 'Arrondissement d\'étude',
                interactive: true,
                title: '<img src="styles/legend/Arrondissementdtude_6.png" /> Arrondissement d\'étude'
            });

lyr_Pays_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Voirieurbaine_3.setVisible(true);lyr_Voirieurbainedesardtconcerns_4.setVisible(true);lyr_Autrearrondissement_5.setVisible(true);lyr_Arrondissementdtude_6.setVisible(true);
var layersList = [lyr_Pays_0,lyr_GoogleMaps_1,lyr_GoogleSatellite_2,lyr_Voirieurbaine_3,lyr_Voirieurbainedesardtconcerns_4,lyr_Autrearrondissement_5,lyr_Arrondissementdtude_6];
lyr_Pays_0.set('fieldAliases', {'Id': 'Id', 'Nom': 'Nom', });
lyr_Voirieurbaine_3.set('fieldAliases', {'id': 'id', 'NOM_VOIE': 'NOM_VOIE', 'TYPE_VOIE': 'TYPE_VOIE', 'CLASSE': 'CLASSE', 'ARRONDISSE': 'ARRONDISSE', 'SECTEUR': 'SECTEUR', 'ETAT': 'ETAT', 'OBSERVATIO': 'OBSERVATIO', 'nomm': 'nomm', 'Nat': 'Nat', 'Eta': 'Eta', 'NATURE': 'NATURE', });
lyr_Voirieurbainedesardtconcerns_4.set('fieldAliases', {'id': 'id', 'NOM_VOIE': 'NOM_VOIE', 'TYPE_VOIE': 'TYPE_VOIE', 'CLASSE': 'CLASSE', 'ARRONDISSE': 'ARRONDISSE', 'SECTEUR': 'SECTEUR', 'ETAT': 'ETAT', 'OBSERVATIO': 'OBSERVATIO', 'nomm': 'nomm', 'Nat': 'Nat', 'Eta': 'Eta', 'NATURE': 'NATURE', });
lyr_Autrearrondissement_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Code_de_la': 'Code_de_la', 'Numéro_de': 'Numéro_de', 'Nom_de_la_': 'Nom_de_la_', 'Population': 'Population', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'SUP': 'SUP', 'DENSITE': 'DENSITE', 'DENS': 'DENS', });
lyr_Arrondissementdtude_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Code_de_la': 'Code_de_la', 'Numéro_de': 'Numéro_de', 'Nom_de_la_': 'Nom_de_la_', 'Population': 'Population', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'SUP': 'SUP', 'DENSITE': 'DENSITE', 'DENS': 'DENS', });
lyr_Pays_0.set('fieldImages', {'Id': 'Range', 'Nom': 'TextEdit', });
lyr_Voirieurbaine_3.set('fieldImages', {'id': '', 'NOM_VOIE': '', 'TYPE_VOIE': '', 'CLASSE': '', 'ARRONDISSE': '', 'SECTEUR': '', 'ETAT': '', 'OBSERVATIO': '', 'nomm': '', 'Nat': '', 'Eta': '', 'NATURE': '', });
lyr_Voirieurbainedesardtconcerns_4.set('fieldImages', {'id': '', 'NOM_VOIE': '', 'TYPE_VOIE': '', 'CLASSE': '', 'ARRONDISSE': '', 'SECTEUR': '', 'ETAT': '', 'OBSERVATIO': '', 'nomm': '', 'Nat': '', 'Eta': '', 'NATURE': '', });
lyr_Autrearrondissement_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Code_de_la': 'TextEdit', 'Numéro_de': 'TextEdit', 'Nom_de_la_': 'TextEdit', 'Population': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'SUP': 'TextEdit', 'DENSITE': 'TextEdit', 'DENS': 'TextEdit', });
lyr_Arrondissementdtude_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Code_de_la': 'TextEdit', 'Numéro_de': 'TextEdit', 'Nom_de_la_': 'TextEdit', 'Population': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'SUP': 'TextEdit', 'DENSITE': 'TextEdit', 'DENS': 'TextEdit', });
lyr_Pays_0.set('fieldLabels', {'Id': 'no label', 'Nom': 'no label', });
lyr_Voirieurbaine_3.set('fieldLabels', {'id': 'no label', 'NOM_VOIE': 'inline label - always visible', 'TYPE_VOIE': 'inline label - always visible', 'CLASSE': 'no label', 'ARRONDISSE': 'no label', 'SECTEUR': 'no label', 'ETAT': 'no label', 'OBSERVATIO': 'no label', 'nomm': 'no label', 'Nat': 'no label', 'Eta': 'no label', 'NATURE': 'inline label - always visible', });
lyr_Voirieurbainedesardtconcerns_4.set('fieldLabels', {'id': 'no label', 'NOM_VOIE': 'inline label - always visible', 'TYPE_VOIE': 'inline label - always visible', 'CLASSE': 'inline label - always visible', 'ARRONDISSE': 'no label', 'SECTEUR': 'no label', 'ETAT': 'no label', 'OBSERVATIO': 'no label', 'nomm': 'no label', 'Nat': 'no label', 'Eta': 'no label', 'NATURE': 'inline label - always visible', });
lyr_Autrearrondissement_5.set('fieldLabels', {'OBJECTID': 'no label', 'Code_de_la': 'no label', 'Numéro_de': 'no label', 'Nom_de_la_': 'no label', 'Population': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'SUP': 'no label', 'DENSITE': 'no label', 'DENS': 'no label', });
lyr_Arrondissementdtude_6.set('fieldLabels', {'OBJECTID': 'no label', 'Code_de_la': 'no label', 'Numéro_de': 'no label', 'Nom_de_la_': 'no label', 'Population': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'SUP': 'no label', 'DENSITE': 'no label', 'DENS': 'no label', });
lyr_Arrondissementdtude_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});