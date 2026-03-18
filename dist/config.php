<?php

/**
 * Arquivo canonico de configuracao do Files-Manager.
 *
 * Este deve ser o unico config.php editado pelo usuario final.
 */

return [
    // Diretorio real onde os arquivos gerenciados serao armazenados.
    'BASE_PATH' => realpath(__DIR__ . '/../demo/media'),

    // Deve corresponder ao rootPath informado no frontend.
    'FRONTEND_ROOT_PATH' => '/demo/media',

    // Upload e validacao.
    'MAX_FILE_SIZE' => 10 * 1024 * 1024,
    'ALLOWED_EXTENSIONS' => [
        'jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp',
        'mp4', 'avi', 'mkv', 'mov', 'webm',
        'mp3', 'wav', 'ogg', 'flac',
        'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'rtf', 'odt',
        'zip', 'rar', '7z', 'tar', 'gz',
    ],
    'ALLOWED_MIMES' => [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/svg+xml',
        'image/bmp',
        'video/mp4',
        'video/x-msvideo',
        'video/x-matroska',
        'video/quicktime',
        'video/webm',
        'audio/mpeg',
        'audio/wav',
        'audio/ogg',
        'audio/flac',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'text/plain',
        'text/rtf',
        'application/vnd.oasis.opendocument.text',
        'application/zip',
        'application/x-rar-compressed',
        'application/x-7z-compressed',
        'application/x-tar',
        'application/gzip',
    ],

    // Protecao de diretorios e arquivos index.html.
    'INDEX_HTML_CONTENT' => '<!DOCTYPE html><html><head><title>403 Forbidden | '
        . 'File-Manager</title></head><body><p>Directory access is forbidden.</p></body></html>',
    'NEW_FOLDER_ADD_INDEX_HTML' => true,
    'AUTO_ADD_MISSING_INDEX_HTML' => true,
    'HIDE_INDEX_HTML_FILES' => true,
    'INDEX_HTML_READ_ONLY' => true,
    'INDEX_HTML_DELETABLE' => false,

    // Seguranca e debug.
    'ENABLE_CSRF' => true,
    'DEBUG' => false,
    'AUTH_CALLBACK' => null,
    'ALLOWED_IPS' => [],
    'CORS_ENABLED' => false,
    'CORS_ALLOWED_ORIGINS' => ['*'],
    'RATE_LIMIT_ENABLED' => false,
    'RATE_LIMIT_MAX_REQUESTS' => 100,
    'RATE_LIMIT_WINDOW' => 60,

    // Miniaturas.
    'THUMBNAIL_CACHE_DIR' => __DIR__ . '/../demo/media/.thumbs',
    'THUMBNAIL_MAX_WIDTH' => 300,
    'THUMBNAIL_MAX_HEIGHT' => 300,
    'THUMBNAIL_QUALITY' => 85,
];
