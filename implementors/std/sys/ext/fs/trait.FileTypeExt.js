(function() {var implementors = {};
implementors["shared_library"] = [];implementors["libloading"] = [];implementors["gfx_gl"] = [];implementors["sdl2"] = [];implementors["tempfile"] = [];implementors["glutin"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
