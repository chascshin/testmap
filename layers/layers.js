var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Perm_1 = new ol.format.GeoJSON();
var features_Perm_1 = format_Perm_1.readFeatures(json_Perm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perm_1.addFeatures(features_Perm_1);
var lyr_Perm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perm_1, 
                style: style_Perm_1,
                popuplayertitle: 'Perm',
                interactive: false,
                title: '<img src="styles/legend/Perm_1.png" /> Perm'
            });
var lyr_ESRILandCover_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ESRI LandCover<br />\
    <img src="styles/legend/ESRILandCover_2_0.png" /> водные объекты<br />\
    <img src="styles/legend/ESRILandCover_2_1.png" /> древесный покров<br />\
    <img src="styles/legend/ESRILandCover_2_2.png" /> травянистая растительность<br />\
    <img src="styles/legend/ESRILandCover_2_3.png" /> подтопленная растительность<br />\
    <img src="styles/legend/ESRILandCover_2_4.png" /> сельскохозяйственные угодья<br />\
    <img src="styles/legend/ESRILandCover_2_5.png" /> открытый грунт<br />\
    <img src="styles/legend/ESRILandCover_2_6.png" /> застроенные территории<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ESRILandCover_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6211405.098859, 7939004.747750, 6307063.742328, 8005371.017056]
        })
    });
var format_photos_3 = new ol.format.GeoJSON();
var features_photos_3 = format_photos_3.readFeatures(json_photos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_photos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_photos_3.addFeatures(features_photos_3);
var lyr_photos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_photos_3, 
                style: style_photos_3,
                popuplayertitle: 'photos',
                interactive: true,
                title: '<img src="styles/legend/photos_3.png" /> photos'
            });
var format_ooptPerm_4 = new ol.format.GeoJSON();
var features_ooptPerm_4 = format_ooptPerm_4.readFeatures(json_ooptPerm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ooptPerm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ooptPerm_4.addFeatures(features_ooptPerm_4);
var lyr_ooptPerm_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ooptPerm_4, 
                style: style_ooptPerm_4,
                popuplayertitle: 'ooptPerm',
                interactive: true,
                title: '<img src="styles/legend/ooptPerm_4.png" /> ooptPerm'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_Perm_1.setVisible(true);lyr_ESRILandCover_2.setVisible(true);lyr_photos_3.setVisible(true);lyr_ooptPerm_4.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_Perm_1,lyr_ESRILandCover_2,lyr_photos_3,lyr_ooptPerm_4];
lyr_Perm_1.set('fieldAliases', {'NAME': 'NAME', });
lyr_photos_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'photo': 'photo', });
lyr_ooptPerm_4.set('fieldAliases', {'NAME': 'NAME', });
lyr_Perm_1.set('fieldImages', {'NAME': '', });
lyr_photos_3.set('fieldImages', {'id': 'TextEdit', 'name': 'ValueMap', 'photo': 'ExternalResource', });
lyr_ooptPerm_4.set('fieldImages', {'NAME': 'TextEdit', });
lyr_Perm_1.set('fieldLabels', {'NAME': 'no label', });
lyr_photos_3.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', 'photo': 'inline label - always visible', });
lyr_ooptPerm_4.set('fieldLabels', {'NAME': 'inline label - always visible', });
lyr_ooptPerm_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});